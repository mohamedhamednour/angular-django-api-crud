import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { dataform } from '../../../../app/shared/components/home/data';
import { ProductService } from '../../servies/product.service';
@Component({
  selector: 'app-product-ditails',
  templateUrl: './product-ditails.component.html',
  styleUrls: ['./product-ditails.component.css'],
})
export class ProductDitailsComponent {
  datForm: dataform = {
    name: '',
    description: '',
    range: '',
  };
  id: any;
  data: any = {};

  constructor(private route: ActivatedRoute, private service: ProductService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getalldata();
  }
  updateprod(form: NgForm, id:any) {
    this.service.updateproduct(form.value, id).subscribe((data) => {
      this.getalldata();

      // this.router.navigateByUrl('/products')
      console.log(data);
    });
  }
  getalldata() {
    this.service.getAllDatabyid(this.id).subscribe((res: any) => {
      console.log(res);
      this.data = res;
    });
  }
}
