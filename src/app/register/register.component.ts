import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ServiceService} from "../shared/service.service";
import {AuthentificationService} from "../shared/authentification.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private Authentification: AuthentificationService, private formm: FormBuilder) {
    this.form = this.formm.group({
      first: [null, [Validators.required]],
      last: [null, [Validators.required]],
      mail: [null, [Validators.required]],
      motdpasse: [null, [Validators.required]]

    });


  }
  ngOnInit(): void {
  }
  submit(form) {
    this.Authentification.adduser(form).subscribe(() => {
      this.router.navigate(['legumes']);
      console.log("user succces");

    });

  }
}
