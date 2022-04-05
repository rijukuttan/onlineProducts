import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
 // counterValue:any;
  //increment() {
  //  this.counterValue++;
    
  //} 
 // decrement() {
   // this.counterValue--;
   
  //}
 count =1;  
  
  receivecount($event: number) {  
  this.count = $event;  
  }  
  
  constructor() { }

  ngOnInit(): void {
  }

}
