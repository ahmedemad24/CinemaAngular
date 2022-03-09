import { ContactComponent } from './page/contact/contact.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { MovieComponent } from './page/movie/movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"about",component:AboutUsComponent },
  {path:"contact",component:ContactComponent },
  {path:"movie/:id",component:MovieComponent} ,
  {path:"",redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
