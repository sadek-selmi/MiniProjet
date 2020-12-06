import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import { DetailsComponent } from './details/details.component';
import { ModidierproduitComponent } from './modidierproduit/modidierproduit.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterproduitComponent,
    ListproduitsComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    ModidierproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
