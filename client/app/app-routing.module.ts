import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent }   from './video-list.component';
import { VideoDetailComponent }   from './video-detail.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'videoList',  component: VideoListComponent },
  { path: 'login',  component: LoginComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
