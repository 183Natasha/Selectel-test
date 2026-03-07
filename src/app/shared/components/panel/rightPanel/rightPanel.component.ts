import { Component } from '@angular/core';
import { CheckboxComponent } from '../../checkbox/checkbox.component';

@Component({
  selector: 'app-right-panel',
  templateUrl: './rightPanel.component.html',
  styleUrl: './rightPanel.component.css',
  imports: [CheckboxComponent],

})
export class RightPanel { }
