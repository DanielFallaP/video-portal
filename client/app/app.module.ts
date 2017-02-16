import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { VideoService } from './video.service';
import { VideoListComponent } from './video-list.component';
import { LoginComponent } from './login.component';
import { VideoDetailComponent } from './video-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MaterializeDirective} from 'angular2-materialize';
import { FormsModule }   from '@angular/forms';

//Imports modules, components, services and bootstrap component
@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
	FormsModule,
  ],
  declarations: [
    AppComponent,
    VideoListComponent,
	VideoDetailComponent,
	LoginComponent,
    MaterializeDirective
  ],
  providers: [
    VideoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
