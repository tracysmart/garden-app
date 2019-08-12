import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  api:string = "http://localhost:3000/api/product";

  plants: any;
  plantPhotos =[];

  constructor(private plantService: PlantService) { }

  ngOnInit() {
  }
  getPlants(){

    this.plantService.getPlantProducts().subscribe((data:any)=>{
      // console.log(data)
      this.plants= data
      this.plantPhotos=[]
      for (let x = 0; x<this.plants.length; x++){
        let randPicNumber = Math.floor(Math.random()*9+1)
        this.plantPhotos.push(`Random_Picture${randPicNumber}.jpg`)
      }
      console.log(this.plantPhotos)
    }, 
    (err:any)=>{
      console.log(err)
    })
  }
    
  
}
