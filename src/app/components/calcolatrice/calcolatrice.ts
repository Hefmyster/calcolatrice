import { Component } from '@angular/core';
import { Tastiera } from "../tastiera/tastiera";
import { DisplayComponent } from "../display/display";

@Component({
  selector: 'calcolatrice',
  templateUrl: './calcolatrice.html',
  styleUrls: ['./calcolatrice.css'],
  imports: [Tastiera, DisplayComponent]
})
export class Calcolatrice {
  display: string = '';

  appendValue(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display).toString();
    } catch (e) {
      this.display = 'Errore';
    }
  }
}
