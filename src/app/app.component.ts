import { Component } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';
import { StartPage } from './startPage/starPage';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, StartPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Selectel-test';
}
