import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent }   from './video-list.component';
import { VideoDetailComponent }   from './video-detail.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/patient', pathMatch: 'full' },
  { path: 'videoList',  component: VideoListComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
