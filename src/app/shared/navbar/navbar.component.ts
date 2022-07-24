import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  // host: {
  //   '(window:resize)': 'onResize($event)',
  // },
})
export class NavbarComponent implements OnInit {
  menu: MenuItem[] = [];
  menuEnabled: boolean = false;
  menuIcon = faBars;
  closeIcon = faTimes;

  constructor(public router: Router, private scroller: ViewportScroller) {}

  ngOnInit() {
    this.router.url
    switch (this.router.url) {
      case '/':
        this.menu = this.home;
        break;
      case '/login':
        this.menu = this.login;
        break;
      default:
        console.log('Configure the route menu.');
    }
  }

  menuHandler() {
    this.menuEnabled = !this.menuEnabled;
  }

  async itemHandler(item: MenuItem) {
    switch (item.type) {
      case 'page':
        await this.router.navigateByUrl(item.path);
        break;
      case 'section':
        this.scroller.scrollToAnchor(item.path);
        break;
      default:
        console.log('Unknown menu item type.');
        break;
    }
  }

  clickHandler(event:MouseEvent){
    const target = <HTMLElement>event?.target;
    if(target?.className == 'activated'){
      this.menuEnabled = false;
    }
  }

  home: MenuItem[] = [
    {
      name: 'Sobre',
      path: 'temporizador',
      icon: 'fa-database',
      type: 'section',
    },
    {
      name: 'Local',
      path: 'local',
      icon: 'fa-database',
      type: 'section',
    },
    {
      name: 'Recompensas',
      path: 'recompensas',
      icon: 'fa-database',
      type: 'section',
    },
    {
      name: 'Entrar',
      path: '/login',
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
  ];
}

interface MenuItem {
  name: string;
  path: string;
  icon: string;
  type: string;
}
