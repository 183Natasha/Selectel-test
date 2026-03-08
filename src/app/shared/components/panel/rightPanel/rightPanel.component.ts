import {
  Component,
  input,
  output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import questions from '@assets/data.json';

@Component({
  selector: 'app-right-panel',
  templateUrl: './rightPanel.component.html',
  styleUrl: './rightPanel.component.css',
  imports: [CheckboxComponent],
})
export class RightPanel implements OnChanges {
  section = input<string>();
  addCountEvent = output<{ counter: number; totalValue: number }>();

  checkboxKey = 0;

  get questionsList() {
    const key = this.section() as keyof typeof questions;
    if (!key) {
      return [];
    }
    return questions[key];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['section'] && !changes['section'].firstChange) {
      console.log('Секция изменилась, сбрасываем чекбоксы');

      this.resetCheckboxes();

      this.checkboxKey++;

      this.addCountEvent.emit({ counter: 0, totalValue: 0 });
    }
  }

  resetCheckboxes() {
    Object.values(questions).forEach(categoryArray => {
      categoryArray.forEach(q => (q.status = false));
    });
  }

  onCheckboxChange(event: { counter: number; totalValue: number }) {
    this.addCountEvent.emit(event);
  }
}
