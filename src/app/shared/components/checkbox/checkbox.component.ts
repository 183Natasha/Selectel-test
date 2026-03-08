import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() optionsCheckbox: { data: string, label: string, value: number, status: boolean }[] = [];

  checkboxCounter: number = 0
  totalValue: number= 0

  counterChange = output<{ counter: number, totalValue: number }>();

  checkStatus(clickOption: { data: string, label: string, value: number, status: boolean }) {
    clickOption.status = !clickOption.status;
    let arr = []
    let value = 0
    for (let el of this.optionsCheckbox) {
      if (el.status === true) {
        arr.push(el)
        this.totalValue
        value=value+el.value

      }
    }
    this.checkboxCounter = arr.length;
    this.totalValue = value;

    this.counterChange.emit(
      { counter: this.checkboxCounter, totalValue: this.totalValue }
    )
  }

}
