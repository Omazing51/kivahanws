import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  private counter: number = 1;
  constructor()
  {
    setInterval(() => {
      const radio = document.getElementById(`radio${this.counter}`);
      if (radio) {
        (radio as HTMLInputElement).checked = true;
      }
      this.counter++;
      if (this.counter > 4) {
        this.counter = 1;
      }
    }, 5000);
  }
  }


