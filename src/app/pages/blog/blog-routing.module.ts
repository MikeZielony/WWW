import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from './blog.component';
import {Gallery1Component} from './gallery1/gallery1.component';
import {Gallery2Component} from './gallery2/gallery2.component';
import {Gallery3Component} from './gallery3/gallery3.component';
import {Gallery4Component} from './gallery4/gallery4.component';

const routes: Routes = [
  {path: '', redirectTo: '1', pathMatch: 'full'},
  {path: '1', component: Gallery1Component},
  {path: '2', component: Gallery2Component},
  {path: '3', component: Gallery3Component},
  {path: '4', component: Gallery4Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
}
