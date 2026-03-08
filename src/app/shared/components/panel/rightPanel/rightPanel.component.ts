import { Component } from '@angular/core';
import { CheckboxComponent } from '../../checkbox/checkbox.component';

@Component({
  selector: 'app-right-panel',
  templateUrl: './rightPanel.component.html',
  styleUrl: './rightPanel.component.css',
  imports: [CheckboxComponent],

})
export class RightPanel {
  questions1 = [
    { data: '1', label: 'Task 1', value: 10 },
    { data: '2', label: 'Task 2', value: 20 },
  ];

  questions2 = [
    { data: '3', label: 'Task 3', value: 30 },
    { data: '4', label: 'Task 4', value: 40 },
    { data: '5', label: 'Task 5', value: 50 },
    { data: '6', label: 'Task 6', value: 60 },
  ]
}
