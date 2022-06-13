import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { user } from '../model/userModel';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent  {
 
 // users: any[];
 // constructor(private _studentService: CustomerService) {
  //    this.users = this._studentService.getCustomer();
 // }
  constructor(private api:CustomerService) {
    
}
users:any;
ngOnInit(): void {
     
  this.api.getUser().subscribe((data)=>{
    this.users= data;
  });
  }
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
   getUserList(){
    this.api.getUser().subscribe((data)=>{
     
      this.users = data;
    });
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
   receiveId($event: number) {  
    this.deleteUser($event) ;
    } 
    receiveEditData($event: any) {  
      this. onEdit($event) ;
      } 
   //id
   id:number=0;
   //mode
   addMode:boolean=false;
   editMode:boolean=false;
   onAdd(){
     this.addMode=true;
     this.editMode=false;
     this.userForm.reset();
   }
   addUser(){
    //this.product.id=this.productForm.value.id;
    // this.product.id=this.productForm.value.id;
    this.user.userName=this.userForm.value.userName;
   // this.user.imageUrl=this.userForm.value.imageUrl;
    this.user.email=this.userForm.value.email;
    this.user.password=this.userForm.value.password;
    //this.user.confrimPassword=this.userForm.value.confrimPassword;
    this.user.userTypeId=this.userForm.value.userTypeId;
    this.user.phoneNumber=this.userForm.value.phoneNumber;
    this.user.streetAddress=this.userForm.value.streetAddress;
    this.user.city=this.userForm.value.city;
    this.user.state=this.userForm.value.state;
    this.user.postalCode=this.userForm.value.postalCode;
   // this.user.createDate=new Date();
   // this.user.modifyDate=new Date();
   // this.addProducts.emit(this.product); 
   this.api.addUser(this.user).subscribe(res=>{
    alert("data added successfully");
    this.getUserList();
  
  })
  }
  onEdit(row:any){
    this.editMode=true;
    this.addMode=false;
    this.id=row.id;
  this.userForm.controls['userName'].setValue(row.userName);
  //this.userForm.controls['imageUrl'].setValue(row.imageUrl);
  this.userForm.controls['email'].setValue(row.email);
  this.userForm.controls['password'].setValue(row.password);
  //this.userForm.controls['confrimPassword'].setValue(row.confrimPassword);
  this.userForm.controls['userTypeId'].setValue(row.userTypeId);
  this.userForm.controls['phoneNumber'].setValue(row.phoneNumber);
  this.userForm.controls['streetAddress'].setValue(row.streetAddress);
  this.userForm.controls['city'].setValue(row.city);
  this.userForm.controls['state'].setValue(row.state);
  this.userForm.controls['postalCode'].setValue(row.postalCode);
  
  
  }
  updateUser(){
    this.user.id=this.id;
    this.user.userName=this.userForm.value.userName;
   // this.user.imageUrl=this.userForm.value.imageUrl;
    this.user.email=this.userForm.value.email;
    this.user.password=this.userForm.value.password;
   // this.user.confrimPassword=this.userForm.value.confrimPassword;
    this.user.userTypeId=this.userForm.value.userTypeId;
    this.user.phoneNumber=this.userForm.value.phoneNumber;
    this.user.streetAddress=this.userForm.value.streetAddress;
    this.user.city=this.userForm.value.city;
    this.user.state=this.userForm.value.state;
    this.user.postalCode=this.userForm.value.postalCode;
   // this.user.createDate=new Date();
    //this.user.modifyDate=new Date();
   // this.addProducts.emit(this.product); 
   this.api.updateUser(this.id,this.user).subscribe(res=>{
    alert("data updated successfully");
    this.getUserList();
  
  })
  }
  deleteUser(id:number){
    if(confirm('Are You Sure you want to delete ?')) {
      this.api.deleteUser(id).subscribe(res=>{
        alert("data updated successfully");
        this.getUserList();
      })
    }
      return false;
  }
//end

  // users= [
  //   {
  //     "address":{
  //       "city": "kilcoole",
  //       "street": "new road",
  //       "number": 7682,
  //       "zipcode": "12926-3874"
  //     },
  //     "id": 1,
  //     "email": "john@gmail.com",
  //     "username": "johnd",
  //     "password": "m38rmF$",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "john",
  //       "lastname": "doe"
  //     },
  //     "phone": "1-570-236-7033",
      
  //   },
  //   {
  //     "address": {
      
  //       "city": "kilcoole",
  //       "street": "Lovers Ln",
  //       "number": 7267,
  //       "zipcode": "12926-3874"
  //     },
  //     "id": 2,
  //     "email": "morrison@gmail.com",
  //     "username": "mor_2314",
  //     "password": "83r5^_",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "david",
  //       "lastname": "morrison"
  //     },
  //     "phone": "1-570-236-7033",
     
  //   },
  //   {
  //     "address": {
     
  //       "city": "Cullman",
  //       "street": "Frances Ct",
  //       "number": 86,
  //       "zipcode": "29567-1452"
  //     },
  //     "id": 3,
  //     "email": "kevin@gmail.com",
  //     "username": "kevinryan",
  //     "password": "kev02937@",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "kevin",
  //       "lastname": "ryan"
  //     },
  //     "phone": "1-567-094-1345",
     
  //   },
  //   {
  //     "address": {
      
  //       "city": "San Antonio",
  //       "street": "Hunters Creek Dr",
  //       "number": 6454,
  //       "zipcode": "98234-1734"
  //     },
  //     "id": 4,
  //     "email": "don@gmail.com",
  //     "username": "donero",
  //     "password": "ewedon",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "don",
  //       "lastname": "romer"
  //     },
  //     "phone": "1-765-789-6734",
     
  //   },
  //   {
  //     "address": {
 
  //       "city": "san Antonio",
  //       "street": "adams St",
  //       "number": 245,
  //       "zipcode": "80796-1234"
  //     },
  //     "id": 5,
  //     "email": "derek@gmail.com",
  //     "username": "derek",
  //     "password": "jklg*_56",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "derek",
  //       "lastname": "powell"
  //     },
  //     "phone": "1-956-001-1945",
     
  //   },
  //   {
  //     "address": {

  //       "city": "el paso",
  //       "street": "prospect st",
  //       "number": 124,
  //       "zipcode": "12346-0456"
  //     },
  //     "id": 6,
  //     "email": "david_r@gmail.com",
  //     "username": "david_r",
  //     "password": "3478*#54",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "david",
  //       "lastname": "russell"
  //     },
  //     "phone": "1-678-345-9856",
    
  //   },
  //   {
  //     "address": {

  //       "city": "fresno",
  //       "street": "saddle st",
  //       "number": 1342,
  //       "zipcode": "96378-0245"
  //     },
  //     "id": 7,
  //     "email": "miriam@gmail.com",
  //     "username": "snyder",
  //     "password": "f238&@*$",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "miriam",
  //       "lastname": "snyder"
  //     },
  //     "phone": "1-123-943-0563",
     
  //   },
  //   {
  //     "address": {
 
  //       "city": "mesa",
  //       "street": "vally view ln",
  //       "number": 1342,
  //       "zipcode": "96378-0245"
  //     },
  //     "id": 8,
  //     "email": "william@gmail.com",
  //     "username": "hopkins",
  //     "password": "William56$hj",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "william",
  //       "lastname": "hopkins"
  //     },
  //     "phone": "1-478-001-0890",
     
  //   },
  //   {
  //     "address": {
   
  //       "city": "miami",
  //       "street": "avondale ave",
  //       "number": 345,
  //       "zipcode": "96378-0245"
  //     },
  //     "id": 9,
  //     "email": "kate@gmail.com",
  //     "username": "kate_h",
  //     "password": "kfejk@*_",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "kate",
  //       "lastname": "hale"
  //     },
  //     "phone": "1-678-456-1934",
     
  //   },
  //   {
  //     "address": {
    
  //       "city": "fort wayne",
  //       "street": "oak lawn ave",
  //       "number": 526,
  //       "zipcode": "10256-4532"
  //     },
  //     "id": 10,
  //     "email": "jimmie@gmail.com",
  //     "username": "jimmie_k",
  //     "password": "klein*#%*",
  //     "image":"https://www.pepperhub.in/wp-content/uploads/2020/11/user-male.png",
  //     "name": {
  //       "firstname": "jimmie",
  //       "lastname": "klein"
  //     },
  //     "phone": "1-104-001-4567",
     
  //   }
  // ];
  

}
