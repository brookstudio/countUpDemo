import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-countup';

  randomNumber: number;

  newRandomNumber() {
    this.randomNumber = Math.random() * 9999999;
  }
}
