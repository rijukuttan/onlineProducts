import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()user!:any;

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
  constructor() { }

  ngOnInit(): void {
  }

}
