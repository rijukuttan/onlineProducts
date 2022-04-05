import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {
  counterValue= 1;
  countLessThenZero=true;
  @Output() countEmitter = new EventEmitter ();  
  PostData() {  
      this.countEmitter.emit(this.counterValue);  
  }  
 
  increment() {
    this.counterValue++;
    this.countLessThenZero=true;
    this.PostData();
  }
  decrement() {
    if(this.counterValue==1){
      this.countLessThenZero=false;
    }else{
      this.countLessThenZero=true;
      this.counterValue--;
    this.PostData();
    }
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
