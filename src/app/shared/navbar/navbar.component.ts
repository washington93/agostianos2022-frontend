import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { JwtHelperService } from '@auth0/angular-jwt';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const helper = new JwtHelperService();

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menu: MenuItem[] = [];
  menuEnabled: boolean = false;
  menuIcon = faBars;
  closeIcon = faTimes;
  ativo = '';

  constructor(public router: Router, private scroller: ViewportScroller) {}

  ngOnInit() {
    this.ativo = sessionStorage.getItem('menu-ativo') || '';
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');

    switch (this.router.url) {
      case '/':
        this.menu = this.home;
        break;
      case '/login':
        this.menu = this.login;
        break;
      case '/signup':
        this.menu = this.signup;
        break;
      case '/dashboard':
        this.menu = this.dashboard;
        if (token) {
          const user = helper.decodeToken(token);
          if (user?.admin) {
            this.menu.push({
              name: 'Area Administrativa',
              path: '/admin',
              icon: 'fa-database',
              type: 'page',
            });
          }
        }

        break;
      case '/settings':
        this.menu = this.settings;
        if (token) {
          const user = helper.decodeToken(token);
          if (user?.admin) {
            this.menu.push({
              name: 'Area Administrativa',
              path: '/admin',
              icon: 'fa-database',
              type: 'page',
            });
          }
        }
        break;
      case '/admin':
        this.menu = this.admin;
        break;
      default:
        console.log('Configure the route menu.');
    }

    if (token) {
      this.menu.push({
        name: 'Sair',
        path: '',
        icon: 'fa-database',
        type: 'logout',
      });
    }
  }

  menuHandler() {
    this.menuEnabled = !this.menuEnabled;
  }

  async itemHandler(item: MenuItem) {
    this.menuEnabled = false;
    this.ativo = item.path;
    sessionStorage.setItem('menu-ativo', item.path);
    switch (item.type) {
      case 'page':
        await this.router.navigateByUrl(item.path);
        break;
      case 'section':
        this.scroller.scrollToAnchor(item.path);
        break;
      case 'logout':
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        await this.router.navigateByUrl(item.path);
        break;
      default:
        console.log('Unknown menu item type.');
        break;
    }
  }

  clickHandler(event: MouseEvent) {
    const target = <HTMLElement>event?.target;
    if (target?.className == 'activated') {
      this.menuEnabled = false;
    }
  }

  home: MenuItem[] = [
    {
      name: 'Inicio',
      path: '/',
      icon: 'fa-database',
      type: 'page',
    },
    {
      name: 'Login',
      path: '/login',
      icon: 'fa-database',
      type: 'page',
    },
    {
      name: 'Cadastro',
      path: '/signup',
      icon: 'fa-database',
      type: 'page',
    },
  ];

  login: MenuItem[] = [
    {
      name: 'Inicio',
      path: '/',
      icon: 'fa-database',
      type: 'page',
    },
    {
      name: 'Login',
      path: '/login',
      icon: 'fa-database',
      type: 'page',
    },
    {
      name: 'Cadastro',
      path: '/signup',
      icon: 'fa-database',
      type: 'page',
    },
  ];

  signup: MenuItem[] = [
    {
      name: 'Inicio',
      path: '/',
      icon: 'fa-database',
      type: 'page',
    },

    {
      name: 'Login',
      path: '/login',
      icon: 'fa-database',
      type: 'page',
    },
    {
      name: 'Cadastro',
      path: '/signup',
      icon: 'fa-database',
      type: 'page',
    },
  ];

  dashboard: MenuItem[] = [
    {
      name: 'Configurações',
      path: '/settings',
      icon: 'fa-database',
      type: 'page',
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: 'fa-database',
      type: 'page',
    },
  ];

  admin: MenuItem[] = [
    {
      name: 'Configurações',
      path: '/settings',
      icon: 'fa-database',
      type: 'page',
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: 'fa-database',
      type: 'page',
    },
    {
      name: 'Area Administrativa',
      path: '/admin',
      icon: 'fa-database',
      type: 'page',
    },
  ];

  settings: MenuItem[] = [
    {
      name: 'Configurações',
      path: '/settings',
      icon: 'fa-database',
      type: 'page',
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: 'fa-database',
      type: 'page',
    },
  ];
}

interface MenuItem {
  name: string;
  path: string;
  icon: string;
  type: string;
}
