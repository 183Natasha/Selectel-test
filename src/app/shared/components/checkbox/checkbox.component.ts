import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  optionsCheckbox: { value: string, label: string }[] = [];
  selectedOption: string = '';
  isVisible: boolean = true

  // if(isVisible) {
  //   optionsCheckbox = [
  //     { value: '1', label: 'Тест 1' },
  //     { value: '2', label: 'Тест 2' },
  //   ];
  // }else{
  // optionsCheckbox = [
  //   { value: '3', label: 'Тест 3' },
  //   { value: '4', label: 'Тест 4' },
  // }


  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
