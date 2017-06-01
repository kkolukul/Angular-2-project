import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductFilter} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import {WelcomeComponent} from './products/welcome.component';

@NgModule({
  imports: [ BrowserModule ,
             FormsModule ,
             HttpModule,
             RouterModule.forRoot([
             {path:'products/:id/:username', component:ProductListComponent},
             {path:'welcome', component:WelcomeComponent},
             {path:"",redirectTo:'welcome',pathMatch:'full'},
             {path:'**',redirectTo:'welcome',pathMatch:'full'}
             ])],
  declarations: [ AppComponent,
                  ProductListComponent,
                  ProductFilter,
                  StarComponent,
                  WelcomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
