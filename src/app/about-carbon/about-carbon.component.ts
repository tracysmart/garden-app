import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-carbon',
  templateUrl: './about-carbon.component.html',
  styleUrls: ['./about-carbon.component.css']
})
export class AboutCarbonComponent implements OnInit {

  exposeCamel: boolean =false

  constructor() { }

  camelShow(){
    this.exposeCamel=!this.exposeCamel
  }

  ngOnInit() {
  }

}
