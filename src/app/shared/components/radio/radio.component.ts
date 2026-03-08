import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import options from '@assets/data.json';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  imports: [FormsModule],
  styleUrl: './radio.component.css',
})
export class RadioComponent {
  get sectionsList() {
    return Object.keys(options).map((key, index) => ({
      id: (index + 1).toString(),
      label: key,
    }));
  }

  addItemEvent = output<string>();

  addItem(optionValue: string) {
    // Отправляем только строку, как и ожидает родитель
    this.addItemEvent.emit(optionValue);
  }
}
