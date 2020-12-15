import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthentificationService} from "../shared/authentification.service";


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

constructor(private authService: AuthentificationService, private router: Router)
{}
  canActivate() {
    if (this.authService.loggedUser) {
      return true;
    } else {
      return false;
    }
  }
}
