import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllProductsComponent} from './prudacts/components/all-products/all-products.component'
import {ProductDitailsComponent} from './prudacts/components/product-ditails/product-ditails.component'
import { AboutComponent } from './shared/components/about/about.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ServicePageComponent } from './shared/components/service-page/service-page.component';
const routes: Routes = [
  {path:'products' , component:AllProductsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'product/:id' , component:ProductDitailsComponent},
  {path:'serviece' , component:ServicePageComponent},

  {path:'home' , component:HomeComponent},

  {path:'about' , component:AboutComponent},


  {path:'*' , redirectTo:'products' , pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
