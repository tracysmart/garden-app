import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutCarbonComponent } from './about-carbon/about-carbon.component';
import { PlantsComponent } from './plants/plants.component';
import { AboutClientComponent } from './about-client/about-client.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: AboutCarbonComponent},
  {path: 'plants', component: PlantsComponent},
  {path: 'about', component: AboutClientComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
