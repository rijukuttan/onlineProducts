import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineProducts';
  // productData = {} as any;
  // ngOnInit(): void {
     
  // this.api.getproduct().subscribe((data)=>{
  //   this.productData = data;
  // });
  // }
  // constructor(private api:ProductsService) { }
}
