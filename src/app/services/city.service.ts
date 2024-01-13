import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  baseUrl = environment.BACKEND_URL.concat('/city');

  cities: Array<City> = [];

  constructor(private httpClient: HttpClient) {}

  // get all cities
  getAllCities() {
    return this.httpClient.get(this.baseUrl);
  }
}
