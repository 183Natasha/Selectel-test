import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  @Input() optionsCheckbox: { data: string, label: string, value: number, status: boolean }[] = [];

  counter = 0

  checkStatus(clickOption: { data: string, label: string, value: number, status: boolean }) {
    clickOption.status=!clickOption.status;
    let len=[]
    for (let el of this.optionsCheckbox) {
      if (el.status === true) {
        len.push(el)
      }
    }
    this.counter=len.length
    console.log(this.counter)
  }
  selectedOption: string = '';
}
