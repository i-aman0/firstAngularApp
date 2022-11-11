// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// // importing our CoursesComponent component into the module  
// import { CoursesComponent } from './courses.component';
// import { CoursesService } from './courses.service';

// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
//     CoursesComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [
//     CoursesService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }








// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AuthModule } from './auth/auth.module';
// import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//  declarations: [
//   AppComponent
//  ],
//  imports: [
//   BrowserModule,
//   AppRoutingModule,
//   AuthModule,
//   FormsModule,
//   ReactiveFormsModule
//  ],
//  providers: [],
//  bootstrap: [AppComponent]
// })
// export class AppModule { }






// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import {HttpClientModule} from '@angular/common/http'
// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }






import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations : [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }