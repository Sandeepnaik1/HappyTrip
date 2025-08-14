import { Component, OnInit } from '@angular/core';
import { ServicemangerService } from '../../core/servicemanger.service';
import { Airport } from '../../models/airport';
import { TravelClass } from '../../models/travel-class';
import { SearchService } from '../../services/search.service';
import { preferedAirline } from '../../models/preferedAirline';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-process',
  templateUrl: './search-process.component.html',
  styleUrls: ['./search-process.component.css'],
})
export class SearchProcessComponent implements OnInit {
  min: string = '';
  city: string[] = [];
  airlineNames: string = '';
  classofTravel: string = '';
  adultLimitData!: number[];
  childrenLimitData!: number[];
  infantsLimitData!: number[];
  fromCity: string = '';
  toCity: string = '';


  airportsdetails: Airport[] | any = [];
  cities: { name: string }[] = [];

  airlinedetails: preferedAirline[] | any = [];
  airline: { name: string }[] = [];

  traveldetails: TravelClass[] | any = [];
  travelClass: { name: string }[] = [];

  // selectedAirline: string = '';
  // selectedTravelClass: string = '';

  flightResults: any;
  departureDate: any;
  selectedClassOfTravel = ''
  selectedAirline = ''

  constructor(
    private router: Router,
    private searchManager: ServicemangerService,
    private serachserv: SearchService
  ) { }

  ngOnInit(): void {
    this.initiliaseFlightData();
    this.adultLimitData = this.searchManager.getAdultLimit();
    this.childrenLimitData = this.searchManager.getChildrenLimit();
    this.infantsLimitData = this.searchManager.getInfantsLimit();

    // Fetch Cities
    this.serachserv.getCities().subscribe((res) => {
      console.log('Cities API Response:', res);
      this.cities = res.data.cities;
    });

    // Fetch Travel Classes
    this.serachserv.getTravelClasses().subscribe((res) => {
      console.log('Travel Classes API Response:', res);
      this.travelClass = res.data.travelClass;
    });

    // Fetch Airlines
    this.serachserv.getpreferedAirline().subscribe((res) => {
      console.log('Prefered Airline API Response:', res);
      this.airline = res.data.Airline;
    });
  }

  initiliaseFlightData() {
    this.serachserv.userEnteredData.subscribe((res: any) => {
      this.fromCity = res.searchData.fromCity;
      this.toCity = res.searchData.toCity;
      this.selectedClassOfTravel = res.searchData.classOfTravel;
      this.selectedAirline = res.searchData.airline;
    }
  )}

  swapCities() {
    [this.fromCity, this.toCity] = [this.toCity, this.fromCity];
  }

  searchFlights() {
    // Ensure search data has valid values
    const searchData: any = {
      fromCity: this.fromCity?.trim() || '',
      toCity: this.toCity?.trim() || '',
      airline: this.selectedAirline || '',
      classOfTravel: this.selectedClassOfTravel || '',
      infantsLimitData:this.infantsLimitData || ''
    };

    this.serachserv.userEnteredData.next({searchData});

    console.log('🔍 Searching for flights with:', searchData);

    // Only proceed if required fields are provided
    if (!searchData.fromCity || !searchData.toCity || !searchData.infantsLimitData) {
      alert('⚠️ Please enter both departure and destination cities and infantsLimit.');
      return;
    }

    this.serachserv.searchFlights(searchData).subscribe({
      next: (res) => {
        console.log('✅ Flight Search Response:', res);

        if (res?.data?.flights?.length) {
          this.flightResults = res.data.flights;
          this.router.navigate(['/flight'], { state: { flights: this.flightResults } });
        } else {
          console.warn(' No flights found.');
          this.flightResults = []; // Clear results if no flights are found
        }

        if(res.error){
          alert(res.message);
        }
        
      },
      error: (err) => {
        console.error('🔥 Error in searching flights:', err);
      },
      complete: () => {
        console.log(' Flight search completed.');
      }
    });
  }

}

