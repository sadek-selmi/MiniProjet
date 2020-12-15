import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListproduitsComponent} from "./listproduits/listproduits.component";
import {CommonModule} from "@angular/common";
import {AjouterproduitComponent} from "./ajouterproduit/ajouterproduit.component";
import {DetailsComponent} from "./details/details.component";
import {LoginComponent} from "./login/login.component";
import {ModidierproduitComponent} from "./modidierproduit/modidierproduit.component";
import {RegisterComponent} from "./register/register.component";
import {AdminGuard} from "./admin/admin.guard";
import {ApirecipeComponent} from "./apirecipe/apirecipe.component";


const routes: Routes = [
  {path: 'legumes',canActivate: [AdminGuard], component: ListproduitsComponent},
  {path: 'legumes/ajouter',canActivate: [AdminGuard], component: AjouterproduitComponent},
  {path: 'legumes/update/:id', canActivate: [AdminGuard],component: ModidierproduitComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', canActivate: [AdminGuard],component: RegisterComponent},

  {path: 'recette',canActivate: [AdminGuard], component: ApirecipeComponent},

  {path: 'legumes/details/:id',canActivate: [AdminGuard], component: DetailsComponent},

  {path:'', canActivate: [AdminGuard],redirectTo: 'legumes', pathMatch:'full'}



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
