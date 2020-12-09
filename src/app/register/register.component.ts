import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ServiceService} from "../shared/service.service";
import {AuthentificationService} from "../shared/authentification.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  modal: any;
  imgSrc;
  results;
  constructor(private productService: AuthentificationService,private router: Router, private Authentification: AuthentificationService, private formm: FormBuilder) {


  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      mail: new FormControl('',  [Validators.required, Validators.email]),
      motdpasse: new FormControl('',  [Validators.required, Validators.minLength(6)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      address: new FormGroup({
        street: new FormControl('123', Validators.required),
        city: new FormControl()
      })
    });
  }
  onSubmit(form){
    Swal.fire({
      title: 'Are you sure want to create?',
      text: 'You will be Seller!',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, confirm it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.productService.adduser(form).subscribe(() => {
          this.router.navigate(['legumes']);

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })




  }
  reset(){
    this.registerForm.reset();
  }
  closeAlert() {
    this.router.navigate(['legumes']);

  }

}
