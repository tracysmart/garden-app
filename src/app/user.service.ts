import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // api = 'http://localhost:3000/api/product'
  api = 'http://localhost:3000/api/auth/login'

  response : Observable<any>
 
constructor(private http: HttpClient) { }


userLogin(user){
  const body = {
    email: user.userName,
    password: user.password
  }

  const reqHeaders = new HttpHeaders({ "Content-Type": "application/json"})


  return this.http.post(this.api, body, {headers: reqHeaders})
  // return this.http.post(this.api, body)
}
}
