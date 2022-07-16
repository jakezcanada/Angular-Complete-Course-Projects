import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  contentOn: boolean = false;
  eventLog: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.contentOn = !this.contentOn;
    this.eventLog.push(this.eventLog.length+1);
  }

}
