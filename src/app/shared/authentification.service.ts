import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  loggedUser = false;
  @Output() getLoggedEvent: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient,private router: Router) {     this.checkLogin();
  }
  adduser(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/user/',data);
  }
  get isLoggedIn() {
    return true;
  }
  resulte(t)
  {
    return t ;
  }

  get isSuperAdmin() {
    return true;
  }
  loggedIn() {
    this.loggedUser = true;
    this.getLoggedEvent.emit();
    this.router.navigate(['login/legumes']);
  }
  checkLogin() {
    if (localStorage.getItem('user'))
      this.loggedUser = true;
    else
      this.loggedUser = false;
  }
  logout() {
    localStorage.removeItem('user');
    this.loggedUser = false;
    this.getLoggedEvent.emit();
    this.router.navigate(['/']);
  }
  isLogged() {
    return this.loggedUser;
  }

}
