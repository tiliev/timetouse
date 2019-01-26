import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  template: `
    <p>
      Component from Module
    </p>
  `,
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
