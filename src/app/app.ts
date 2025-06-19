import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calcolatrice } from "./components/calcolatrice/calcolatrice";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calcolatrice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'calcolatrice';
}
