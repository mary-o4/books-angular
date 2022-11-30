import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NailserviceListComponent } from './nailservice-list/nailservice-list.component';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NailshopAboutComponent } from './nailshop-about/nailshop-about.component';
import { NailshopComponent } from './nailshop/nailshop.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { NailshopHomeComponent } from './nailshop-home/nailshop-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NailserviceListComponent,
    ShoppingCartComponent,
    NailshopAboutComponent,
    NailshopComponent,
    NailshopHomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
