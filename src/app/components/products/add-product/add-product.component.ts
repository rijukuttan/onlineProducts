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
    id :0,
  productName:"",
  imageUrl:"",
  productPrice:0,
  createDate:new Date(),
  modifyDate:new Date(),
  describtion:''
   }
   productForm=new FormGroup({
    id:new FormControl(''),
    productName:new FormControl(''),
    imageUrl:new FormControl(''),
    productPrice:new FormControl(''),
    describtion:new FormControl(''),
    //productPrice:new FormControl(''),
   // category:new FormControl(''),
   })
 
  constructor() { }

  ngOnInit(): void {
  }
  // onClickSubmit(data:any){
  //   this.product.title=data.value.title;
  //   this.product.price=data.value.price;
  //   this.product.description=data.value.description;
  //   this.product.category=data.value.category;
  //   this.product.image= "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  //   this.addProducts.emit(this.product); 

  // }
  onClickSubmitReactive(){

    //this.product.id=this.productForm.value.id;
    this.product.id=this.productForm.value.id;
    this.product.productName=this.productForm.value.productName;
    this.product.imageUrl=this.productForm.value.imageUrl;
    this.product.productPrice=this.productForm.value.productPrice;
    this.product.describtion=this.productForm.value.describtion;
    this.product.createDate=new Date();
    this.product.modifyDate=new Date();
    this.addProducts.emit(this.product); 

  }

}
