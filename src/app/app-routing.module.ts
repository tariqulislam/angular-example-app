import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutUsComponent} from "./components/about-us/about-us.component"
import {HomeComponent} from "./components/home/home.component"

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'admin', loadChildren: () => import("./components/admin/admin.module").then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
