import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsComponent } from './plants/plants.component';
import { LoginComponent } from './login/login.component';
import { AboutClientComponent } from './about-client/about-client.component';
import { AboutCarbonComponent } from './about-carbon/about-carbon.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { CarbonNavComponent } from './carbon-nav/carbon-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    LoginComponent,
    AboutClientComponent,
    AboutCarbonComponent,
    HeaderNavComponent,
    CarbonNavComponent
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
