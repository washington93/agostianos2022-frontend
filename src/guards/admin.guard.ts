import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad, CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    return this.execute();
  }
  canLoad() {
    return this.execute();
  }

  execute(): boolean {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');

    if (token) {
      const user = helper.decodeToken(token);
      if (user?.admin) {
        return true;
      } else {
        this.router.navigate(['/']).then(() => {});
        return false;
      }
    } else {
      this.router.navigate(['/']).then(() => {});
      return false;
    }
  }
}
