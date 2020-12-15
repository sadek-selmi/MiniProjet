import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "./shared/authentification.service";
import {user} from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  title = 'MiniProject';
  valInput: string;
  valOutput: string;
  isUnchanged = true;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http:HttpClient,private authService: AuthentificationService) {

  }

  ChangeValue(n: string){

    this.valOutput = n;
  }

}
