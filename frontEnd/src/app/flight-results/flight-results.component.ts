import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../dashboard/models/flight';


@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css']
})
export class FlightResultsComponent implements OnInit {
  // flightNumber!: string;
  // airline!: string;
  // departureCity!: string;
  // arrivalCity!: string;
  // departureDateTime!: string;
  // arrivalDateTime!: string;
  // duration!: string;
  // classOfTravel!: string;
  // price!: number;
  flightResults: Flight[] = []; // Array to store flight results

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch the flight results passed from the search page
    const flightData = history.state?.flights; // Assuming flight data is passed via router state
    if (flightData) {
      this.flightResults = flightData;
    }
  }
}
