import { Component, OnInit } from '@angular/core';
import { BlockScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-centre',
  template: '<div>Card:{{name}}</div>',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.less']
})
export class CentreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
