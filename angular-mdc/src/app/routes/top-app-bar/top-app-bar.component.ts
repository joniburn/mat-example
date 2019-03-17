import { Component } from '@angular/core';

import { AppBarService } from '../../app-bar.service';

@Component({
  selector: 'myapp-top-app-bar',
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss']
})
export class TopAppBarComponent {

  constructor(
    public appBarService: AppBarService,
  ) {
  }

}
