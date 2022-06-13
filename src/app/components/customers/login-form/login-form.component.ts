import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { user } from '../../model/userModel';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
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
  logInForm=new FormGroup({
    id:new FormControl(''),
    
    email:new FormControl(''),
    password:new FormControl(''),
   
   })
   logIn(){
  
    //this.product.id=this.productForm.value.id;
    // this.product.id=this.productForm.value.id;
   
   // this.user.imageUrl=this.userForm.value.imageUrl;
    this.user.email=this.logInForm.value.email;
    this.user.password=this.logInForm.value.password;
    //this.user.confrimPassword=this.userForm.value.confrimPassword;
    
   // this.user.createDate=new Date();
   // this.user.modifyDate=new Date();
   // this.addProducts.emit(this.product); 
   this.api.getUserByEmail(this.user.email,this.user.password).subscribe(res=>{
    alert("login sucessfully");
    this.logInForm.reset();
    this.router.navigate(['productHome']);
  },
  
    (error) =>  alert("login failed"))
  }
  constructor(private api:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

}
