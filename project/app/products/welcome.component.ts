import {Component} from '@angular/core';


@Component({
selector :"wl-cmp",
template :`<div>
            <h3>Hello User! check out all our products <a [routerLink]="['/products/2/kamal']">here</a></h3>
          </div>`
})


export class WelcomeComponent {}
