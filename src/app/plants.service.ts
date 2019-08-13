import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http: HttpClient) { }

  killPlantService(id) {
    const url = `http://localhost:3000/api/product/${id}`;
    const token = sessionStorage.getItem('token');
    const reqHeaders = new HttpHeaders({ "Content-Type": "application/json", "Authorization": token });
    return this.http.delete(url, {headers: reqHeaders})
    
  }

getPlantProduct() {
 return this.http.get('http://localhost:3000/api/product')
}
}