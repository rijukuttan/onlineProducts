import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ProductsComponent } from './components/products/products.component';
import { CustomersComponent } from './components/customers/customers.component';
import { UserComponent } from './components/customers/user/user.component';
import { ProductComponent } from './components/products/product/product.component';
import { CounterComponent } from './components/products/counter/counter.component';
import { CounterchildComponent } from './components/products/counter/counterchild/counterchild.component';
import { CustomerService } from './services/customer.service';
import { AddUserComponent } from './components/customers/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/products/add-product/add-product.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    ProductsComponent,
    CustomersComponent,
    UserComponent,
    ProductComponent,
    CounterComponent,
    CounterchildComponent,
    AddUserComponent,
    AddProductComponent,

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
