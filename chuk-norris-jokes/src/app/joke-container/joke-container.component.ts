import { Component, Input } from '@angular/core';

@Component({
  selector: 'joke-container',
  templateUrl: './joke-container.component.html',
  styleUrls: ['./joke-container.component.scss'],
})
export class JokeContainerComponent {
  @Input ('joke') joke:string;
  @Input ('error') error:string;
  @Input ('showJoke') showJoke:boolean;

}
