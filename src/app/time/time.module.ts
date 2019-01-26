import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time.component';
import { MathService } from '../math.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TimeComponent],
  providers: [MathService],
  exports: [TimeComponent]
})
export class TimeModule { }
