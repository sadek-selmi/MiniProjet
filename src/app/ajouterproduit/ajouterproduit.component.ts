import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../shared/service.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.scss']
})
export class AjouterproduitComponent implements OnInit {
  form: FormGroup;
  imageSrc: string;

  constructor(private router: Router, private productService: ServiceService, private formm: FormBuilder) {
    this.form = this.formm.group({

      title: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      description: [null, [Validators.required]],
      image: [null, [Validators.required]],
      fileSource: new FormControl('', [Validators.required])



    });


  }

  ngOnInit(): void {
  }



  onFileChange(event) {

    const reader = new FileReader();


    if (event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);


      reader.onload = () => {


        this.imageSrc = reader.result as string;


        this.form.patchValue({

          fileSource: reader.result

        });


      };


    }

  }
  submit(form) {
    this.productService.addlegumes(form).subscribe(() => {
      this.router.navigate(['legumes']);
      console.log("book added succesfully");

    });

  }
}
