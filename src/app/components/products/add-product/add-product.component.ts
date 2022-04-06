import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Product } from '../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 
  @Output() addProducts=new EventEmitter<Product>()
  product:Product={
    id:0,
    title: "",
    price:0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate:0 ,
      count: 0
   }
   }
 
  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(data:any){
    this.product.title=data.value.title;
    this.product.price=data.value.price;
    this.product.description=data.value.description;
    this.product.category=data.value.category;
    this.product.image= "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
    this.addProducts.emit(this.product); 

  }

}
