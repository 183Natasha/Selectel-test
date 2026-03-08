import { Component, output } from '@angular/core';
import { RadioComponent } from '../../radio/radio.component';

@Component({
  selector: 'app-left-panel',
  templateUrl: './leftPanel.component.html',
  styleUrl: './leftPanel.component.css',
  imports: [RadioComponent],
})
export class LeftPanel {
  addItemEvent = output<string>();

  onRadioChange(value: string) {
    // console.log('🟢 [LeftPanel] Получено значение от radio:', value);
    // console.log('🟢 [LeftPanel] Пробрасываю наверх в main');

    // Передаем событие дальше в MainPage
    this.addItemEvent.emit(value);
  }
}
