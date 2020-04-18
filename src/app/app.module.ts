import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from './_alert';

import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './about/components/video/video.component';
import { LinksComponent } from './about/components/links/links.component';
import { UpnextComponent } from './about/components/upnext/upnext.component';
import { AddvideoComponent } from './about/components/addvideo/addvideo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    AboutComponent,
    VideoComponent,
    LinksComponent,
    UpnextComponent,
    AddvideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
