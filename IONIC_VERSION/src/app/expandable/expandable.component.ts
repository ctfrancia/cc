import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {
  @Input ('expanded') expanded;
  @Input ('content') content;

  currentHeight:number=0;
  constructor() { }
  ngOnInit():void{

  }
  ngAfterViewInit() {
    console.log(this.expanded)
  }

}
