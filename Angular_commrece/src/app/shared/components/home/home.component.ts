import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductService} from '../../../prudacts/servies/product.service'
import { dataform } from './data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  datForm :dataform ={
    name:'',
    description:'',
    range:''
  }
  constructor( private postData : ProductService , private router : Router){



  }

  addproduct (form:NgForm){
    this.postData.postproduct(form.value).subscribe((data)=>{
      this.router.navigateByUrl('/products')

   console.log(data)

    })
  }


}
