import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonoprixRoutingModule } from './monoprix-routing.module';
import { MonoprixComponent } from '../../views/monoprix/monoprix.component';
import { FormmonoprixComponent } from '../../views/monoprix/formmonoprix/formmonoprix.component';


@NgModule({
  declarations: [MonoprixComponent,FormmonoprixComponent],
  imports: [
    CommonModule,
    MonoprixRoutingModule
  ]
})
export class MonoprixModule { }
