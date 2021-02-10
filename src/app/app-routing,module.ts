import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './pages/blog/blog.component';
import {HomeComponent} from './pages/home/home.component';
import {AktualComponent} from './pages/aktual/aktual.component';
import {KontaktComponent} from './pages/kontakt/kontakt.component';
import {MapComponent} from './pages/mapa/map.component';
import {NavbarComponent} from './pages/navbar/navbar.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {MenuComponent} from './pages/menu/menu.component';
import {UserSettingComponent} from './pages/user-setting/user-setting.component';


const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  {path: 'blog', component: BlogComponent},
  {path: 'home', component: HomeComponent},
  {path: 'actual', component: AktualComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'mapa', component: MapComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'settings', component: UserSettingComponent},
  { path: '*', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
