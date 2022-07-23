import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./content/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'home', loadChildren: () => import('./content/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./content/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
