import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDitailsComponent } from './components/product-ditails/product-ditails.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [AllProductsComponent, ProductDitailsComponent],
  imports: [CommonModule , RouterModule , FormsModule],
})
export class PrudactsModule {}
