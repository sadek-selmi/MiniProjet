import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../shared/service.service";

@Component({
  selector: 'app-modidierproduit',
  templateUrl: './modidierproduit.component.html',
  styleUrls: ['./modidierproduit.component.scss']
})
export class ModidierproduitComponent implements OnInit {

  id;
  form: FormGroup;
  legume;
  imageSrc: string;

  constructor(private legumeService:ServiceService,private route: ActivatedRoute, private router: Router,private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
      image: [null, [Validators.required]],
      fileSource: new FormControl('', [Validators.required])





    });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.legumeService.getlegumesById(this.id).subscribe((result)=>{
      this.legume=result;
      this.form.patchValue(this.legume);
    });
  }
  modifierproduit(form){


    this.legumeService.updatelegumes(this.id,form).subscribe(() =>{
      this.router.navigate(['legumes']);

    });
  }





  onFileChange(event) {

    const reader = new FileReader();



    if(event.target.files && event.target.files.length) {

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

}
