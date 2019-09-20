import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less']
})
export class Child{
  
}
export class ChildComponent implements OnInit {
  @Input('loggedIn')loginFlag=true;
  constructor() { }

  ngOnInit() {
  }

}
