import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AktualComponent } from './aktual/aktual.component';
import { BlogComponent } from './blog/blog.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import {AppRoutingModule} from './app-routing,module';
import {HttpClientModule} from '@angular/common/http';
import { MapComponent } from './mapa/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AktualComponent,
    BlogComponent,
    KontaktComponent,
    MapComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
