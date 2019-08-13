import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  api='http://localhost:3000/api/product'
  plants: any

  constructor(private http: HttpClient) { }

  getPlantProducts(){
    return this.http.get(this.api)
    //this.plants.http.get(this.api)
  }
}
