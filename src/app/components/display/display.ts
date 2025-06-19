import { Component, Input } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.html',
  styleUrls: ['./display.css']
})
export class DisplayComponent {
  @Input() valore: string = '';
}
