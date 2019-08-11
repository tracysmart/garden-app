import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  api = "http://localhost:3000/api/product";
  user = {
    userName: "",
    password: ""
  };

  constructor(private userService: UserService) { }
  // constructor(private http: HttpClient) { }

  plants: any;

  ngOnInit() { }
  logIn() {
    console.log(this.user);
    this.userService.userLogin(this.user)
    .subscribe((data:any) => {
        if (data.error =='false'){
          console.log('great'+ data)
        } else {
        console.log(data)
      }},
      err => console.log(err)
    );
  }
  // getPlants(){
  //   this.plants = this.http.get(this.api)
  // }
}
