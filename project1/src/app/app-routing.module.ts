import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './../Home/Home.component';
// import {TravelComponent} from './../Travel/Travel.component';
import { UserComponent } from './../User/user.component';
import {FeaturesComponent} from './../Features/features.component';
import {ContactComponent} from './../contact/contact.component';
import { ErrorComponent } from './../error/error.component';
import { RegisterComponent } from '../register/register.component';


const routes: Routes = [

  { path:'home', component:HomeComponent},
 { path:'features', component:FeaturesComponent},
 { path:'user', component:UserComponent},
 { path:'contact', component:ContactComponent},
 { path:'register', component:RegisterComponent},
{ path:'**',component:ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

