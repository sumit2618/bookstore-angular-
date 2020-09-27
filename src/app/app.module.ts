import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { BookService } from "./book.service";
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { LoginComponent } from './login/login.component';
import { UserserviceService } from "./userservice.service";
import { ReactiveFormsModule } from '@angular/forms';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthenauthenticationService } from "./authenauthentication.service";
import { PurchasebookComponent } from './purchasebook/purchasebook.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { OrderdetailsService } from "./orderdetails.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserregistrationComponent,
    LoginComponent,
    BookdetailsComponent,
    LogoutComponent,
    NavbarComponent,
    PurchasebookComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BookService,UserserviceService ,AuthenauthenticationService ,OrderdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
