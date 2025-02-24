// servicemanger.service.ts
import { Injectable } from '@angular/core';
import { SearchService } from '../services/search.service';

@Injectable({
  providedIn: 'root',
})
export class ServicemangerService {
  ADULT_LIMIT: number = 9;
  CHILDREN_LIMIT: number = 9;
  INFANTS_LIMIT: number = 5;
  airports: any;
  errmessage: string = '';
  posts: any;
  data: any;

  constructor(private searchApi: SearchService) {}

  getAirports() {
    // Call to service class to get airports and return the observable
    return this.searchApi.getAirports();
  }

  getTravelClasses() {
    // Call to service class to get travel classes and return the observable
    return this.searchApi.getTravelClasses();
  }

  getAirline() {
    // Call to service class to get airline details and return the observable
    return this.searchApi.getAirlineDetails();
  }

  getAdultLimit() {
    let ADULT_LIMIT = [];
    for (let i = 1; i <= this.ADULT_LIMIT; i++) {
      ADULT_LIMIT.push(i);
    }
    return ADULT_LIMIT;
  }

  getChildrenLimit() {
    let CHILDREN_LIMIT = [];
    for (let i = 1; i <= this.CHILDREN_LIMIT; i++) {
      CHILDREN_LIMIT.push(i);
    }
    return CHILDREN_LIMIT;
  }

  getInfantsLimit() {
    let INFANTS_LIMIT = [];
    for (let i = 1; i <= this.INFANTS_LIMIT; i++) {
      INFANTS_LIMIT.push(i);
    }
    return INFANTS_LIMIT;
  }
}
