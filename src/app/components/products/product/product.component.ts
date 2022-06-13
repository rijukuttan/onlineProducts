import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit,Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   constructor(private api:ProductsService) { }
   productData = {} as any;
  ngOnInit(): void {
     
  this.api.getproduct().subscribe((data)=>{
    this.productData = data;
  });
  }



 
 

}
