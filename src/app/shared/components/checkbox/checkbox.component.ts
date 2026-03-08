import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  @Input() optionsCheckbox: {
    id: number;
    label: string;
    value: number;
    status: boolean;
  }[] = [];

  checkboxCounter = 0;
  totalValue = 0;

  counterChange = output<{ counter: number; totalValue: number }>();

  checkStatus(clickOption: {
    id: number;
    label: string;
    value: number;
    status: boolean;
  }) {
    clickOption.status = !clickOption.status;
    const arr = [];
    let value = 0;
    for (const el of this.optionsCheckbox) {
      if (el.status === true) {
        arr.push(el);
        value = value + el.value;
      }
    }
    this.checkboxCounter = arr.length;
    this.totalValue = value;

    this.counterChange.emit({
      counter: this.checkboxCounter,
      totalValue: this.totalValue,
    });
  }
}
