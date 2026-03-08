import {
  Component,
  input,
  output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import questions from './data.json';

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
  questions1 = questions.test1;
  questions2 = questions.test2;

  get questionsList() {
    if (this.section() === '1') {
      return this.questions1;
    }
    if (this.section() === '2') {
      return this.questions2;
    }
    return [];
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
    this.questions1.forEach(q => (q.status = false));

    this.questions2.forEach(q => (q.status = false));
  }

  onCheckboxChange(event: { counter: number; totalValue: number }) {
    this.addCountEvent.emit(event);
  }
}
