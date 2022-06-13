import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from './Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 // isShowAddProduct = false;
   
 // toggleAddProduct() {
   // this.isShowAddProduct = !this.isShowAddProduct;
 // }
//modal form

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
 //id
 id:number=0;
 //mode
 addMode:boolean=false;
 editMode:boolean=false;
 onAdd(){
   this.addMode=true;
   this.editMode=false;
   this.productForm.reset();
 }
 addProduct(){
  //this.product.id=this.productForm.value.id;
  // this.product.id=this.productForm.value.id;
  this.product.productName=this.productForm.value.productName;
  this.product.imageUrl=this.productForm.value.imageUrl;
  this.product.productPrice=this.productForm.value.productPrice;
  this.product.describtion=this.productForm.value.describtion;
  this.product.createDate=new Date();
  this.product.modifyDate=new Date();
 // this.addProducts.emit(this.product); 
 this.api.addProduct(this.product).subscribe(res=>{
  alert("data added successfully");
  this.getProductList();

})
}
onEdit(row:any){
  this.editMode=true;
  this.addMode=false;
  this.id=row.id;
this.productForm.controls['productName'].setValue(row.productName);
this.productForm.controls['imageUrl'].setValue(row.imageUrl);
this.productForm.controls['productPrice'].setValue(row.productPrice);
this.productForm.controls['describtion'].setValue(row.describtion);

}
updateProduct(){
  this.product.id=this.id;
  this.product.productName=this.productForm.value.productName;
  this.product.imageUrl=this.productForm.value.imageUrl;
  this.product.productPrice=this.productForm.value.productPrice;
  this.product.describtion=this.productForm.value.describtion;
  this.product.createDate=new Date();
  this.product.modifyDate=new Date();
 // this.addProducts.emit(this.product); 
 this.api.updateProduct(this.id,this.product).subscribe(res=>{
  alert("data updated successfully");
  this.getProductList();

})
}
deleteProduct(row:any){
  if(confirm('Are You Sure you want to delete ?')) {
    this.api.deleteProduct(row.id).subscribe(res=>{
      alert("data updated successfully");
      this.getProductList();
    })
  }
    return false;
}

//end
 ProductDetail=false;
 showProductDetailsToggle() {
   this.ProductDetail = !this.ProductDetail;
 }
  // isShowDivIf = false;
  
  // toggleDisplayDivIf() {
  //   this.isShowDivIf = !this.isShowDivIf;
  // }

  // editmode(id:number){
  //   alert(id);
  //   this.id=id;
  // }
//   addProduct($event: any) { 
  
//     //this.p = $event;  
//     //this.p=($event);
//     if(this.id==0){
     
//       this.api.addProduct($event).subscribe(res=>{
//         alert(res.toString());

// })
//     }else{
//       $event.id=this.id;
//       this.api.updateProduct(this.id,$event).subscribe(res=>{
//          this.id=0;
//         alert("data updated");
//       })
//     }
    
//    // this.products.push($event)
   
//     }  
getProductList(){
  this.api.getproduct().subscribe((data)=>{
    this.productData = data;
  });
}
    productData = {} as any;
    ngOnInit(): void {
      this.addMode=false;
      this.editMode=false;
    this.api.getproduct().subscribe((data)=>{
      this.productData = data;
    });
    }
   // p:any=[];
  
constructor(private api:ProductsService) { }
 


}
