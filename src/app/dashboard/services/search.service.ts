// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Flight } from '../models/flight';

// @Injectable({
//   providedIn: 'root',
// })
// export class SearchService {
//   getTravelClasses() {
//     throw new Error('Method not implemented.');
//   }
//   private baseUrl = 'http://localhost:3000/api/flights'; // Change this to your backend URL

//   constructor(private http: HttpClient) {}

//   // Method to update flight details
//   updateFlight(id: string, flightData: Flight): Observable<Flight> {
//     return this.http.put<Flight>(`${this.baseUrl}/${id}`, flightData);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl = 'http://localhost:3000/api/flights'; // Change this to your backend URL

  constructor(private http: HttpClient) {}

  // Method to update flight details
  updateFlight(id: string, flightData: Flight): Observable<Flight> {
    return this.http.put<Flight>(`${this.baseUrl}/${id}`, flightData);
  }

  // Method to get travel classes (to be implemented)
  getTravelClasses(): Observable<any> {
    // You will need to change this URL to the correct endpoint for travel classes
    return this.http.get<any>('http://localhost:3000/api/travel-classes');
  }

  // Method to get airports (new method example)
  getAirports(): Observable<any> {
    // Change this URL to the correct endpoint for airports
    return this.http.get<any>('http://localhost:3000/api/airports');
  }

  // Method to get airline details (new method example)
  getAirlineDetails(): Observable<any> {
    // Change this URL to the correct endpoint for airline details
    return this.http.get<any>('http://localhost:3000/api/airlines');
  }
}
