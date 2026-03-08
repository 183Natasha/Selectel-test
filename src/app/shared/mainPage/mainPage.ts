import { Component } from '@angular/core';
import { LeftPanel } from '../components/panel/leftPanel/leftPanel.component';
import { RightPanel } from '../components/panel/rightPanel/rightPanel.component';

@Component({
  selector: 'app-main',
  templateUrl: './mainPage.html',
  styleUrl: './mainPage.css',
  imports: [LeftPanel, RightPanel],
})
export class MainPage {
  section = '';
  countSelectedItems = 0;
  generalValue = 0;

  initialFormState = { section: '', countSelectedItems: 0, generalValue: 0 };

  addItem(item: string) {
    this.section = item;
    this.resetCounters();
  }

  resetCounters() {
    this.countSelectedItems = this.initialFormState.countSelectedItems;
    this.generalValue = this.initialFormState.generalValue;
  }

  addCount(event: { counter: number; totalValue: number }) {
    this.countSelectedItems = event.counter;
    this.generalValue = event.totalValue;
  }
}
