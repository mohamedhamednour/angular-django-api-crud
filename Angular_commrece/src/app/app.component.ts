import { Component , OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  imageSrc = 'assets/img/home.jpg'
ngOnInit(){
  $('document').ready(()=>{
    $("#btn").show(3000);


  })

}

}
