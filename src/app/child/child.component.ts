import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
 @Input() getGabriel
 @Input() getAbleGod
 @Output() parentReceiveFromChild:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  name:string;
  sendToParent()
  {
    this.parentReceiveFromChild.emit(this.name)
  }

}
