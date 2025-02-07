import { Component, OnInit } from '@angular/core';
import { ServicemangerService } from '../../core/servicemanger.service';
import { Airport } from '../../models/airport';
import { Flight } from '../../models/flight';
import { TravelClass } from '../../models/travel-class';

@Component({
  selector: 'app-search-process',
  templateUrl: './search-process.component.html',
  styleUrls: ['./search-process.component.css'],
})
export class SearchProcessComponent implements OnInit {
  min: string = '';
  city: string[] = [];
  airlineNames: string[] = [];
  classofTravel: string[] = [];
  adultLimitData!: number[];
  childrenLimitData!: number[];
  infantsLimitData!: number[];

  airportsdetails: Airport[] = [];
  cities = { airports: this.airportsdetails };

  airlinedetails: Flight[] = [];
  airline = { flights: this.airlinedetails };

  traveldetails: TravelClass[] = [];
  travel = { travelClasses: this.traveldetails };

  constructor(private searchManager: ServicemangerService) {}

  ngOnInit(): void {
    this.adultLimitData = this.searchManager.getAdultLimit();
    this.childrenLimitData = this.searchManager.getChildrenLimit();
    this.infantsLimitData = this.searchManager.getInfantsLimit();

    this.searchManager.getAirports().subscribe(
      (data: any) => {
        this.cities.airports = data.airports;
        this.cityName();
      },
      (error: any) => {
        console.error('Error fetching airports:', error);
      }
    );

    this.searchManager.getTravelClasses().subscribe(
      (data: any) => {
        this.travel.travelClasses = data.travelClasses;
        this.classofTravels();
      },
      (error: any) => {
        console.error('Error fetching travel classes:', error);
      }
    );

    // this.searchManager.getAirlineDetails().subscribe(
    //   (data: any) => {
    //     this.airline.flights = data.flights;
    //     this.airlineName();
    //   },
    //   (error: any) => {
    //     console.error('Error fetching flights:', error);
    //   }
    // );

    this.pastDate();
  }

  cityName() {
    this.cities.airports.map((value: any) => {
      this.city.push(value.city_name);
    });
  }

  airlineName() {
    this.airline.flights.map((value: any) => {
      this.airlineNames.push(value.airline);
    });
  }

  classofTravels() {
    this.travel.travelClasses.map((value: any) => {
      this.classofTravel.push(value.title);
    });
  }

  pastDate() {
    const date: Date = new Date();
    const day: string = date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
    const month: string = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : '' + (date.getMonth() + 1);
    const year: number = date.getFullYear();
    this.min = `${year}-${month}-${day}`;
  }
}
