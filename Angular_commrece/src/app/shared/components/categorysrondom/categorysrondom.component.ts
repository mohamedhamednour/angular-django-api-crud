import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categorysrondom',
  templateUrl: './categorysrondom.component.html',
  styleUrls: ['./categorysrondom.component.css'],
})
export class CategorysrondomComponent implements OnInit {
  allproduct: any = [];
  start: number = 0;
  end: number = 3;
  intervalClose: any;

  ngOnInit(): void {
    this.intervalClose = setInterval(() => {
      this.end += 3;
      this.start += 3;
      if (this.start == 18) {
        this.end = 3;
        this.start = 0;
      }
    }, 3000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalClose);
  }

  ngAfterViewChecked(): void {
    this.allproduct = JSON.parse(localStorage.getItem('products')!);
  }
}
