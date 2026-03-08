import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() optionsCheckbox: { data: string, label: string, value: number }[] = [];

  selectedOption: string = '';
}
