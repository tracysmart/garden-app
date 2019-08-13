import { Component, OnInit } from '@angular/core';
// import { PLANTS } from '../mock-plants';
import { PlantsService } from '../plants.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  plants:any = [];
  plantPics = [];
  token: string;

  constructor(private plantsService:PlantsService, private http: HttpClient) {
  
   }

  ngOnInit() {
    if (sessionStorage.getItem("token")) {
      this.token = sessionStorage.getItem('token');
    }
    this.loadPlants()

   }
   loadPlants() {
    this.plantsService.getPlantProduct()
    .subscribe((data) => {
      console.log(data)
      this.plants = data
      for(let i=0; i < this.plants.length; i++){
        let randomPic = Math.floor(Math.random() * 13) +1;
        this.plantPics.push(`../../assets/${randomPic}.jpg`) 
      }
     
    })
  }
  killPlant(id) {
   this.plantsService.killPlantService(id).subscribe((data:any)=>{
    //  this.loadPlants()
     console.log(data)
   }, err => console.log(err))
  }}
