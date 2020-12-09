import { Component, OnInit } from '@angular/core';
import {user} from "../model/legumes/user";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthentificationService} from "../shared/authentification.service";
import Swal from "sweetalert2";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',]

})
export class LoginComponent implements OnInit {
  listuser: user[];
  registerForm: FormGroup;
  element: HTMLElement;
  elemen: HTMLElement;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http:HttpClient,private authService: AuthentificationService) {
    this.http.get<user[]>('http://localhost:3000/user/').subscribe(
      (data) => {

        this.listuser = data;
      }
    );
  }

  test: boolean = false;
s:string;
k:number;
  login(form) {
console.log(form.mail);
    console.log(form.motdpasse);
console.log("user",this.listuser);
    for (let i = 0; i < this.listuser.length; i++) {

      if ((this.listuser[i].mail == form.mail) && (this.listuser[i].motdpasse ==form.motdpasse)) {
        this.router.navigate(['legumes']);

        return   this.test = true;


      }

    }
    if (this.test == false) {
      Swal.fire({
        title: 'Verifier  ',
        text: '',
        icon: 'warning',

        confirmButtonText: 'Retour'

      }).then((result) => {
        if (result.value) {



        }
      })
      return  false ;

    }

  }


  ngOnInit(): void {

    this.registerForm = new FormGroup({
      mail: new FormControl('',  [Validators.required, Validators.email]),
      motdpasse: new FormControl('',  [Validators.required, Validators.minLength(6)])

    });



  }

}
