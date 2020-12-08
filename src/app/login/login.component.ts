import { Component, OnInit } from '@angular/core';
import {user} from "../model/legumes/user";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../shared/authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',]

})
export class LoginComponent implements OnInit {
  listuser: user[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http:HttpClient,private authService: AuthentificationService) {
    this.http.get<user[]>('http://localhost:3000/user/').subscribe(
      (data) => {

        this.listuser = data;
      }
    );
  }

  mail;
  motdpasse;
  test: boolean = false;

  login(mail, motdpasse) {
    console.log(this.listuser);
    for (let i = 0; i < this.listuser.length; i++) {
      if ((this.listuser[i].mail == mail) && (this.listuser[i].motdpasse ==motdpasse)) {
        this.router.navigate(['legumes']);
this.authService.resulte(true);
      return   this.test = true;

      }

    }
    if (this.test == false) {this.authService.resulte(false);

      return  false ;
      alert('verifier votre mot de passe');
    }

  }


  ngOnInit(): void {
  }

}
