import { Component } from '@angular/core';
import { StartPage } from './startPage/starPage';
import { MainPage } from './mainPage/mainPage';

@Component({
  selector: 'app-root',
  imports: [ StartPage, MainPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Selectel-test';
}
