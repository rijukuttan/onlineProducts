import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterFormComponent } from './components/customers/register-form/register-form.component';
import { LoginFormComponent } from './components/customers/login-form/login-form.component';

const routes: Routes = [
  // {path:'',redirectTo:'./Home',pathMatch:'full'},
  {path:'',component:ProductComponent},
  {path:'customers',component:CustomersComponent},
  {path:'products',component:ProductsComponent},
  {path:'productHome',component:ProductComponent},
  {path:'registerForm',component:RegisterFormComponent},
  {path:'loginForm',component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
