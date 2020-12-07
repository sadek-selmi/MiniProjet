import { Component, OnInit } from '@angular/core';
import {user} from "../model/legumes/user";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',]

})
export class LoginComponent implements OnInit {
  listuser: user[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http:HttpClient) {
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
        this.test = true;
      }

    }
    if (this.test == false) {
      alert('verifier votre mot de passe');
    }

  }


  ngOnInit(): void {
  }

}
