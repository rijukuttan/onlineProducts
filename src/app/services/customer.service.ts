import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../components/model/userModel';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http:HttpClient) { }
  // getproduct(){
  
  //   return this.http.get('http://localhost:51443/api/Employee/GetProduct'); 
  //   }
  //   addProduct(val:any){
  //     return this.http.post('http://localhost:51443/api/Employee/PostAddProduct',val)
  //   }
  //   updateProduct(val:any){
  //     return this.http.post('http://localhost:51443/api/Employee/UpdateProduct',val)
  //   }
  //   deleteProduct(val:any){
  //     return this.http.post('http://localhost:51443/api/Employee/DeleteProduct',val)
  //   }
  readonly userUrl="https://localhost:44351/api/Users";
    getUser():Observable<any[]>{
      return this.http.get<any>(this.userUrl); 
      }
      getUserById(id:number):Observable<user>{
        return this.http.get<any>(`https://localhost:44351/api/Users/${id}`); 
        }
        getUserByEmail(email:any,password:any):Observable<user>{
          return this.http.get<any>(`https://localhost:44351/api/Users/${email},${password}`); 
          }
      addUser(val:any){
        return this.http.post('https://localhost:44351/api/Users',val)
      }
      updateUser(id:number,val:any){
        return this.http.put(`https://localhost:44351/api/Users/${id}`,val)
      }
      deleteUser(id:number){
        return this.http.delete(`https://localhost:44351/api/Users/${id}`)
      }
 
}
