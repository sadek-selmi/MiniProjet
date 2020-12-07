import { Injectable } from '@angular/core';
import {legumes} from '../model/legumes/legumes';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {user} from "../model/legumes/user";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  listProductShare: legumes[];
  url = 'http://localhost:3000/legumes/';

  constructor(private http: HttpClient) {
  }
  deleteProduct(id) {
    return this.http.delete(this.url + id);
  }
  getuser(){
    return this.http.get<user[]>('http://localhost:3000/user/');
  }

  getProductsWS(){
    return this.http.get<legumes[]>('http://localhost:3000/legumes/');
  }

  addlegumes(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/legumes/',data);
  }
  getlegumesById(id:number){
    return this.http.get<legumes>('http://localhost:3000/legumes/' +id);
  }
  deletelegumes(id:number){
    return this.http.delete('http://localhost:3000/legumes/' +id);
  }

  updatelegumes( id:any, data:any){
    return this.http.put<legumes>('http://localhost:3000/legumes/' +id, data);

  }

}
