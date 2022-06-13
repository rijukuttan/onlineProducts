import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { user } from '../../model/userModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()users!:any;
@Output() idEmitter = new EventEmitter ();  
@Output() editUserEmitter = new EventEmitter (); 
onEdit( data:any) {  
    this.editUserEmitter.emit(data);  
} 
deleteUser(id:number){
  this.idEmitter.emit(id);
}
//user:any;
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
 //editUser:any;

userDetail=false;
showUserDetailsToggle() {
  this.userDetail = !this.userDetail;
}
getClass(){
  var classList='';
  if(this.userDetail){
     classList = 'fa fa-plus'; 
  }else {
      classList = 'fa fa-minus';
  }
  return classList;
}
//operation
userForm=new FormGroup({
  id:new FormControl(''),
  userName:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl(''),
  confrimPassword:new FormControl(''),
  userTypeId:new FormControl(''),
  phoneNumber:new FormControl(''),
  streetAddress:new FormControl(''),
  city:new FormControl(''),
  state:new FormControl(''),
  postalCode:new FormControl(''),

 })

getUserList(){
  this.api.getUser().subscribe((data)=>{
   
    this.users = data;
  });
}

  constructor(private api:CustomerService) { }

  ngOnInit(): void {
  }

}
