import {Component} from '@angular/core';


@Component({
  selector :"pm-app",
  template:
        `<div class="navbar navbar-inverse">
            <ul class="nav navbar-nav">
              <li><a [routerLink]="['/welcome']">Home</a></li>
              <li><a [routerLink]="['/products/2/kamal']">Products</a></li>
            </ul>
              </div>
              <div>
                  <h2>{{pageTitle}}</h2>
                  <router-outlet></router-outlet>
              </div>`

})

export class AppComponent {
  pageTitle : string = "welcome to my application";

}
