import { Injectable } from '@angular/core';
import {legumes} from '../model/legumes';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {user} from "../model/user";
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
  findByTitle(title: string): Observable<any> {
    let params1 = new HttpParams().set('title',title);
    return this.http.get('http://localhost:3000/user/',{params:params1});
  }

  getProductsWS(){
    return this.http.get<legumes[]>('http://localhost:3000/legumes/');
  }


  addlegumes(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/legumes/',data);
  }
  contact(mail:any,subject:any): Observable<any>{
    return this.http.post('http://localhost:3000/contact/', {mail,subject});
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
