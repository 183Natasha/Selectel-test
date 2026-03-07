import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  imports: [FormsModule],
  styleUrl: './radio.component.css'
})
export class RadioComponent {

  options = [
    { value: '1', label: 'Тест 1' },
    { value: '2', label: 'Тест 2' },
  ];

  selectedOption: string = '';

  greet() {
    console.log('Hello, there 👋');
  }

  addItemEvent = output<string>()

  addItem(optionValue: string) {
    // console.log('Выбрано значение:', optionValue);
    this.selectedOption = optionValue;

    // Отправляем только строку, как и ожидает родитель
    this.addItemEvent.emit(optionValue);
  }
}
