import { Component, OnInit } from '@angular/core';
import { PLANTS } from '../mock-plants';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  plants = PLANTS;

  token: string;

  constructor() { }

  ngOnInit() {
    if (sessionStorage.getItem("token")) {
      this.token = sessionStorage.getItem('token');
    }

  }
}

