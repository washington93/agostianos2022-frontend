import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanLoad, CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    return this.execute();
  }

  canLoad() {
    return this.execute();
  }

  execute(): boolean {
    const isLogged = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (isLogged) {
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      return true;
    }
  }
}
