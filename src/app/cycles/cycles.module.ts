import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyclesRoutingModule } from './cycles-routing.module';
import { CycleListComponent } from './cycle-list/cycle-list.component';

import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [CycleListComponent],
  imports: [
    CommonModule,
    CyclesRoutingModule,
    MatTabsModule
  ]
})
export class CyclesModule { }
