import { Component, EventEmitter,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent implements OnInit {

  constructor() { }

  @Output()  updateEventEmitter1 = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
