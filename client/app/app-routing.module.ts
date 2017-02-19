import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent }   from './video-list.component';
import { VideoDetailComponent }   from './video-detail.component';
import { LoginComponent } from './login.component';

// Video portal's routes.
const routes: Routes = [
  { path: 'videoList',  component: VideoListComponent},
  { path: 'videoDetail',  component: VideoDetailComponent},
  { path: '',  component: LoginComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

/**
 * Routing module class for the Video Portal.
 */
export class AppRoutingModule {}
