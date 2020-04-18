import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from './_alert';

import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
	declarations: [ AppComponent, NavbarComponent, WelcomeComponent, AboutComponent, CourseListComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, AlertModule, HttpClientModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
