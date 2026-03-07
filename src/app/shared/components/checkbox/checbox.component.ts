import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checbox.component.html',
  styleUrl: './checbox.component.css'
})
export class CheckboxComponent {
  optionsCheckbox = [
    { value: '1', label: 'Тест 1' },
    { value: '2', label: 'Тест 2' },
  ];

  selectedOption: string = '';

}
