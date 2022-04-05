import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
  ngOnInit(): void {
  }
 
 

}
