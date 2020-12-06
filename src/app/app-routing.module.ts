import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListproduitsComponent} from "./listproduits/listproduits.component";
import {CommonModule} from "@angular/common";
import {AjouterproduitComponent} from "./ajouterproduit/ajouterproduit.component";
import {DetailsComponent} from "./details/details.component";
import {LoginComponent} from "./login/login.component";
import {ModidierproduitComponent} from "./modidierproduit/modidierproduit.component";


const routes: Routes = [
  {path: 'legumes', component: ListproduitsComponent},
  {path: 'legumes/ajouter', component: AjouterproduitComponent},
  {path: 'legumes/update/:id', component: ModidierproduitComponent},

  {path: 'legumes/details/:id', component: DetailsComponent},

  {path:'', redirectTo: 'legumes', pathMatch:'full'}



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
