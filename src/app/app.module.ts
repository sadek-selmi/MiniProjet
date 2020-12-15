import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterproduitComponent } from './ajouterproduit/ajouterproduit.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DetailsComponent } from './details/details.component';
import { ModidierproduitComponent } from './modidierproduit/modidierproduit.component';
import { ContactComponent } from './contact/contact.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ApirecipeComponent } from './apirecipe/apirecipe.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({

  declarations: [
    AppComponent,
    AjouterproduitComponent,
    ListproduitsComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    ModidierproduitComponent,
    ContactComponent,
    ApirecipeComponent,
    NavBarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
      SweetAlert2Module.forRoot(),

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
