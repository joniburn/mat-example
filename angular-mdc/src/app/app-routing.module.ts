import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './routes/top/top.component';
import { TopAppBarComponent } from './routes/top-app-bar/top-app-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent, data: { title: 'Angular MDC' } },
  { path: 'top-app-bar', component: TopAppBarComponent, data: { title: 'Top App Bar' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
