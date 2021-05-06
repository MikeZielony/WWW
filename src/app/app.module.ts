import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AktualComponent } from './pages/aktual/aktual.component';
import { BlogComponent } from './pages/blog/blog.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import {AppRoutingModule} from './app-routing,module';
import {HttpClientModule} from '@angular/common/http';
import { MapComponent } from './pages/mapa/map.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {UserSettingComponent} from './pages/user-setting/user-setting.component';


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
    PageNotFoundComponent,
    UserSettingComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
