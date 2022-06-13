import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly productUrl="https://localhost:44351/api/Products";
  constructor (private http:HttpClient) {
  
  }

    getproduct():Observable<any[]>{
      return this.http.get<any>(this.productUrl); 
      }
      addProduct(val:any){
        return this.http.post('https://localhost:44351/api/Products',val)
      }
      updateProduct(id:number,val:any){
        return this.http.put(`https://localhost:44351/api/Products/${id}`,val)
      }
      deleteProduct(id:number){
        return this.http.delete(`https://localhost:44351/api/Products/${id}`)
      }
    }