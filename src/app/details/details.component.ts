import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../shared/service.service";
import {legumes} from "../model/legumes/legumes";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
legume;
  listProduct: legumes[];
  constructor(private route: ActivatedRoute,private router: Router, public legumesService:ServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.legumesService.getlegumesById(id).subscribe((result)=>{
      this.legume=result;
      console.log(this.legume);
    });


  }
  submit(form){
    this.legumesService.deleteProduct(form).subscribe(() =>{
      this.router.navigate(['legumes']);
      console.log("legumes supprimer succesfully");

    });

  }
  subm(id){
      this.router.navigate(['legumes/update/',id]);
      console.log("legumes supprimer succesfully");


  }

}
