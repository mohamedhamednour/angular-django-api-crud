import { Component } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cards : any
  constructor(){

  }

  ngOnInit(){

    $('document').ready(()=>{
      $(".footernav").show(2000);


    })


  }
  ngDoCheck() {
    //Action for change
    this.cards = JSON.parse(localStorage.getItem('card')!)

  }

show(){

    $("#navbar-solid-bg").fadeToggle('slow');




}
}

