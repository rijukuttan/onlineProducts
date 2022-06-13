import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit {
  constructor() { }
  @Input()product:any
  ProductDetail=false;
  showProductDetailsToggle() {
    this.ProductDetail = !this.ProductDetail;
  }
  getClass(){
    var classList='';
    if(this.ProductDetail){
       classList = 'fa fa-plus'; 
    }else {
        classList = 'fa fa-minus';
    }
    return classList;
  }
    // ngOnInit(): void {
    //   console.log(this.product.productName);
    // }
   // productData = {} as any;
    ngOnInit(): void {
       
    // this.api.getproduct().subscribe((data)=>{
    //   this.productData = data;
    //});
    }
  // constructor() { }

  // ngOnInit(): void {
  // }

}
