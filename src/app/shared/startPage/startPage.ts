import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [ButtonComponent, RouterModule],
  templateUrl: './startPage.html',
  styleUrl: './startPage.css'
})
export class StartPage {

}
