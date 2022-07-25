import { AdminGuard } from './../guards/admin.guard';
import { AuthGuard } from './../guards/auth.guard';
import { AppGuard } from './../guards/app.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./content/home/home.module').then(m => m.HomeModule), canActivate: [AppGuard] },

  { path: 'home' , loadChildren: () => import('./content/home/home.module').then(m => m.HomeModule), canActivate: [AppGuard] },
  { path: 'login', loadChildren: () => import('./content/login/login.module').then(m => m.LoginModule), canActivate: [AppGuard] },
  { path: 'signup', loadChildren: () => import('./content/signup/signup.module').then(m => m.SignupModule), canActivate: [AppGuard] },
  { path: 'dashboard', loadChildren: () => import('./content/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./content/admin/admin.module').then(m => m.AdminModule), canActivate: [AdminGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
