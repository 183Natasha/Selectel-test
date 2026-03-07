import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
    selector: 'app-start',
  imports: [ButtonComponent],
    templateUrl: './startPage.html',
    styleUrl: './startPage.css'
})
export class StartPage { }
