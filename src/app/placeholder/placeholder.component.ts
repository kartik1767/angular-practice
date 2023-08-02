import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../serivces/placeholder.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  constructor(private _placeholderService : PlaceholderService) { }

  public place:any = []
  
  ngOnInit(): void {
    this._placeholderService.getData()
    .subscribe(data => this.place = data);
  }

}
