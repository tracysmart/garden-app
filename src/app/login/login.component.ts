import { Component, OnInit } from "@angular/core";
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

  token: string;

  constructor(private userService: UserService) { }

  plants: any;

  ngOnInit() { 
    if (sessionStorage.getItem("token")) {
      this.token=sessionStorage.getItem('token');
    }

  }

  logOut(){
    sessionStorage.clear();
    this.token=undefined

  }
  logIn() {
    console.log(this.user);
    this.userService.userLogin(this.user)
    .subscribe((data:any) => {
        if (data.error ===false){
          sessionStorage.setItem("token", data.token);
          this.token=data.token
          console.log(this.token)
        } else {
        console.log(data)
      }},
      err => console.log(err)
    );
  }

}
