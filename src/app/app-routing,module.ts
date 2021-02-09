import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import {AktualComponent} from './aktual/aktual.component';
import {KontaktComponent} from './kontakt/kontakt.component';
import {MapComponent} from './mapa/map.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MenuComponent} from './menu/menu.component';


const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  {path: 'blog', component: BlogComponent},
  {path: 'home', component: HomeComponent},
  {path: 'actual', component: AktualComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'mapa', component: MapComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'menu', component: MenuComponent},
  {path: '*', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
