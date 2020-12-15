import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ServiceService} from "../shared/service.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnChanges {
  form: FormGroup;
  @Input() val: string;
  @Output() event = new EventEmitter<string>();
  private mail: any;
  constructor( private productService: ServiceService, private formm: FormBuilder) {

    this.form = this.formm.group({

      subject: [null, [Validators.required]]



    });
    console.log();
  }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.event.emit();
  }


submi(subject){

console.log("jejjejej",this.val);
  console.log("subjeeeeee",subject);











  Swal.fire({
    title: 'Thnx  ',
    text: '',
    icon: 'success',

    confirmButtonText: 'skip'

  }).then((result) => {
    if (result.value) {

      this.productService.contact(this.val,subject).subscribe(() => {
        console.log("book added succesfully");
      });

      }
    })


}
}
