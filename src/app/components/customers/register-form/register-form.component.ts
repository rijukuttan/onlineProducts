import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { user } from '../../model/userModel';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  user:user={
    id: 0,
    userName: "",
    email: "",
    password: "",
    userTypeId: 0,
   
    createdDate: new Date(),
   modifiedDate: new Date(),
    phoneNumber: 0,
    streetAddress: "",
    city: "",
    state: "",
    postalCode: ""
   }
  regForm=new FormGroup({
    id:new FormControl(''),
    userName:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    confrimPassword:new FormControl(''),
    phoneNumber:new FormControl(''),
    streetAddress:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    postalCode:new FormControl(''),
    //productPrice:new FormControl(''),
   // category:new FormControl(''),
   })
   regUser(){
  
    //this.product.id=this.productForm.value.id;
    // this.product.id=this.productForm.value.id;
    this.user.userName=this.regForm.value.userName;
   // this.user.imageUrl=this.userForm.value.imageUrl;
    this.user.email=this.regForm.value.email;
    this.user.password=this.regForm.value.password;
    //this.user.confrimPassword=this.userForm.value.confrimPassword;
    this.user.userTypeId=3;
    this.user.phoneNumber=this.regForm.value.phoneNumber;
    this.user.streetAddress=this.regForm.value.streetAddress;
    this.user.city=this.regForm.value.city;
    this.user.state=this.regForm.value.state;
    this.user.postalCode=this.regForm.value.postalCode;
   // this.user.createDate=new Date();
   // this.user.modifyDate=new Date();
   // this.addProducts.emit(this.product); 
   this.api.addUser(this.user).subscribe(res=>{
    alert("data added successfully");
    this.regForm.reset();
    this.router.navigate(['logInForm']);
  },
  
    (error) =>  alert("user Already exist"))
  }
  constructor(private api:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

}
