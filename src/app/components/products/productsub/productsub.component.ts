import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-productsub',
  templateUrl: './productsub.component.html',
  styleUrls: ['./productsub.component.css']
})
export class ProductsubComponent implements OnInit {
  @Input()product:any
  constructor() { }

  ngOnInit(): void {
  }

}
