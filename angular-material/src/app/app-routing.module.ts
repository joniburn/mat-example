import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './routes/top/top.component';
import { SchematicsComponent } from './routes/schematics/schematics.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent, data: { title: 'Angular Material' } },
  { path: 'schematics', component: SchematicsComponent, data: { title: 'Schematics' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
