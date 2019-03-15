import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './routes/top/top.component';
import { FeaturesComponent } from './routes/features/features.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent, data: { title: 'Angular Material' } },
  { path: 'features', component: FeaturesComponent, data: { title: '特徴' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
