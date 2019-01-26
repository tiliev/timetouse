import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeModule } from '../time/time.module';


import { SequencesRoutingModule } from './sequences-routing.module';
import { SequenceListComponent } from './sequence-list/sequence-list.component';

@NgModule({
  declarations: [SequenceListComponent],
  imports: [
    CommonModule,
    SequencesRoutingModule,
    TimeModule,
  ]
})
export class SequencesModule { }
