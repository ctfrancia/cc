import { Component, Input } from '@angular/core';
@Component({
  selector: 'expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent {
  @Input ('expanded') expanded:boolean;
  @Input ('content') content:string;
  currentHeight:number=0;
}
