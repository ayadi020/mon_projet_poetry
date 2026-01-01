import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonoprixComponent } from '../../views/monoprix/monoprix.component';
import { FormmonoprixComponent } from '../../views/monoprix/formmonoprix/formmonoprix.component';

const routes: Routes = [
  { path: 'list', component: MonoprixComponent },
  { path: 'formMonoprix', component: FormmonoprixComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonoprixRoutingModule { }
