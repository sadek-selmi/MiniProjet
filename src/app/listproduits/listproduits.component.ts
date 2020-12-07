import { Component, OnInit } from '@angular/core';
import {legumes} from "../model/legumes/legumes";
import {ServiceService} from "../shared/service.service";

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.scss']
})
export class ListproduitsComponent implements OnInit {

  listProducts: legumes[];
  product: legumes;

  constructor(private productService: ServiceService) {

  }

  ngOnInit(): void {
    this.productService.getProductsWS().subscribe(
      (data: legumes[]) => this.listProducts = data

    );

  }
}
