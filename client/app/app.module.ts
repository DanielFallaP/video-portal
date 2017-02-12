import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { VideoService } from './video.service';
import { VideoListComponent } from './video-list.component';
import { VideoDetailComponent } from './video-detail.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MaterializeDirective} from 'angular2-materialize';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    VideoListComponent,
	VideoDetailComponent,
    MaterializeDirective
  ],
  providers: [
    VideoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
