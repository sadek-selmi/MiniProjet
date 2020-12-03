import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListproduitsComponent} from "./listproduits/listproduits.component";
import {CommonModule} from "@angular/common";
import {AjouterproduitComponent} from "./ajouterproduit/ajouterproduit.component";
import {DetailsComponent} from "./details/details.component";


const routes: Routes = [
  {path: 'affichage', component: ListproduitsComponent},
  {path: 'ajouter', component: AjouterproduitComponent},
  {path: 'affichage/details/:id', component: DetailsComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
