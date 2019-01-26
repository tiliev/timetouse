import { Component, OnInit } from '@angular/core';
/*import { TimeModule } from '../../time/time.module';*/
import { MathService } from '../../math.service';



@Component({
  selector: 'app-sequence-list',
  templateUrl: './sequence-list.component.html',
  styleUrls: ['./sequence-list.component.css']
})
export class SequenceListComponent implements OnInit {
  title = 'app';
  num: number;
  constructor(private _ser: MathService ) {
  }
  onclick() {
    this.num = this._ser.add(100, 200);
  }
  ngOnInit() {
  }
}
