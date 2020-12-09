import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  title = 'MiniProject';
  valInput: string;
  valOutput: string;
  isUnchanged = true;

  ChangeValue(n: string){

    this.valOutput = n;
  }
}
