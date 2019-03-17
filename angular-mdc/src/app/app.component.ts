import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AppBarService } from './app-bar.service';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;

  isDrawerOpened = false;

  constructor(
    private router: Router,
    public s: AppBarService,
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const routes = this.router.routerState.root.children;
        if (routes.length > 0) {
          this.title = routes[routes.length - 1].snapshot.data.title;
        }
      }
    });
  }

  toggleDrawer() {
    this.isDrawerOpened = !this.isDrawerOpened;
  }

}
