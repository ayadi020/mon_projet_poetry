import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';

const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'monoprix',
    loadChildren: () =>
      import('./features/monoprix/monoprix.module').then(
        (m) => m.MonoprixModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
