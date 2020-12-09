import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../shared/service.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.scss']
})
export class AjouterproduitComponent implements OnInit {

  registerForm: FormGroup;
  imageSrc: string;
  submitted = false;

  constructor(private router: Router, private productService: ServiceService) {


  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),

      price: new FormControl('', [Validators.required, Validators.min(0),Validators.maxLength(100000)]),
      quantity: new FormControl('', [Validators.required, Validators.min(0),Validators.maxLength(100000)]),
      image: new FormControl('',  [Validators.required]),
      fileSource: new FormControl('', [Validators.required])

    });
  }



  onFileChange(event) {

    const reader = new FileReader();


    if (event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);


      reader.onload = () => {


        this.imageSrc = reader.result as string;


        this.registerForm.patchValue({

          fileSource: reader.result

        });


      };


    }

  }
  onSubmit(form){
    Swal.fire({
      title: 'Are you sure want to ADD Product?',
      text: '',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, confirm it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.productService.addlegumes(form).subscribe(() => {
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
