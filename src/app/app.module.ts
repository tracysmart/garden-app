import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsComponent } from './plants/plants.component';
import { LoginComponent } from './login/login.component';
import { AboutClientComponent } from './about-client/about-client.component';
import { AboutCarbonComponent } from './about-carbon/about-carbon.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    LoginComponent,
    AboutClientComponent,
    AboutCarbonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
