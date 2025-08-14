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
//     +return this.http.put<Flight>(`${this.baseUrl}/${id}`, flightData);
// }
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Flight } from '../models/flight';
import { TravelClass } from '../models/travel-class';
import { preferedAirline } from '../models/preferedAirline';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl = 'http://localhost:3000/'; // Change this to your backend URL

  userEnteredData = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  // Method to update flight details
  updateFlight(): Observable<Flight> {
    const url = `${this.baseUrl}`; 
    console.log('Calling API:', url);
    return this.http.post<Flight>(`${this.baseUrl}`, {});
  }

  getCities(): Observable<any> {
    const url = `${this.baseUrl}`; 
    console.log('Calling API:', url);
    return this.http.get<Flight>(`${this.baseUrl}cities`);
  }
  

  // Method to get travel classes (to be implemented)
  getTravelClasses(): Observable<any> {
    // You will need to change this URL to the correct endpoint for travel classes
    const url = `${this.baseUrl}`; 
    console.log('Calling API:', url);
    return this.http.get<TravelClass>(`${this.baseUrl}TravelClass`);
    // return this.http.get<TravelClass>('http://localhost:3000/');
  }


  getpreferedAirline(): Observable<any> {
    const url = `${this.baseUrl}`; 
    console.log('Calling preferedAirline API:', url);
    return this.http.get<preferedAirline>(`${this.baseUrl}preferedAirline`);
    
  }
  searchFlights(searchData: any): Observable<any> {
    const url = `${this.baseUrl}SearchFlight`; // Ensure your backend API endpoint is set here
    console.log('Calling search flight API:', url);
    return this.http.post<Flight>(url, searchData );
    
  }


  // Method to get airports (new method example)
  getAirports(): Observable<any> {
    // Change this URL to the correct endpoint for airports
    return this.http.get<any>('http://localhost:3000/');
  }

  // Method to get airline details (new method example)
  getAirlineDetails(): Observable<any> {
    // Change this URL to the correct endpoint for airline details
    return this.http.get<any>('http://localhost:3000/api/airlines');
  }
}
