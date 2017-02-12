import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  
  template: `
   <nav>
    <div class="nav-wrapper" style="background-color:black;">
      <div class="brand-logo">&nbsp;{{title}}</div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/"><i class="material-icons">power_settings_new</i></a></li>
		
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent  {
  title = 'Video Portal';
}
