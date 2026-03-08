import { Component, input } from '@angular/core';
import { CheckboxComponent } from '../../checkbox/checkbox.component';

@Component({
  selector: 'app-right-panel',
  templateUrl: './rightPanel.component.html',
  styleUrl: './rightPanel.component.css',
  imports: [CheckboxComponent],

})
export class RightPanel {
  section = input<string>()

  questions1 = [
    { data: '1', label: 'Task 1', value: 10 , status: false},
    { data: '2', label: 'Task 2', value: 20 , status: false},
  ];

  questions2 = [
    { data: '3', label: 'Task 3', value: 30, status: false},
    { data: '4', label: 'Task 4', value: 40, status: false },
    { data: '5', label: 'Task 5', value: 50 , status: false},
    { data: '6', label: 'Task 6', value: 60 , status: false},
  ]

  get questionsList() {
    if (this.section() === '1') {
      return this.questions1;
    }
    if (this.section() === '2') {
      return this.questions2;
    }
    return [];
  }

}
