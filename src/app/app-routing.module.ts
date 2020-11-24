import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDistanceComponent } from './components/add-distance/add-distance.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: AddDistanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
