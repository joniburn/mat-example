import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatDrawer } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @ViewChild('drawer')
  drawer: MatDrawer;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
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

  dismissDrawer() {
    if (this.drawer.mode === 'over') {
      this.drawer.close();
    }
  }

}
