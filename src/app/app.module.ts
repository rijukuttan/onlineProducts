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
//import { AddUserComponent } from './components/customers/add-user/add-user.component';
import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImgMagnifier } from "ng-img-magnifier";
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AddProductComponent } from './components/products/add-product/add-product.component';
//import { ProductsubComponent } from './components/products/productsub/productsub.component';
import { ProductChildComponent } from './components/products/product/product-child/product-child.component';
import { RegisterFormComponent } from './components/customers/register-form/register-form.component';
import { LoginFormComponent } from './components/customers/login-form/login-form.component';



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
    RegisterFormComponent,
    //AddUserComponent,
    AddProductComponent,
   // ProductsubComponent,
    ProductChildComponent,
   LoginFormComponent,
 
   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImgMagnifier,NgxImageZoomModule
  
  
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
