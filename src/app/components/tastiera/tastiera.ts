import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tastiera',
  templateUrl: './tastiera.html',
  styleUrls: ['./tastiera.css']
})
export class Tastiera{
  @Output() onButtonClick = new EventEmitter<string>();
  @Output() onClear = new EventEmitter<void>();
  @Output() onEquals = new EventEmitter<void>();

  numeri = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '+', '-', '*', '/',];

  clicca(val: string) {
    this.onButtonClick.emit(val);
  }

  clear() {
    this.onClear.emit();
  }

  equals() {
    this.onEquals.emit();
  }
}
