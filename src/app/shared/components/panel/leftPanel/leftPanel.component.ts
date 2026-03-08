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
    this.addItemEvent.emit(value);
  }
}
