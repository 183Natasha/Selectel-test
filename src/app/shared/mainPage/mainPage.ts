import { Component } from '@angular/core';
import { LeftPanel } from '../components/panel/leftPanel/leftPanel.component';
import { RightPanel } from '../components/panel/rightPanel/rightPanel.component';


@Component({
  selector: 'app-main',
  templateUrl: './mainPage.html',
  styleUrl: './mainPage.css',
  imports: [LeftPanel, RightPanel]
})
export class MainPage {
  section:string = "";
  countSelectedItems: number = 0;
  generalValue: number = 0;

  addItem(item: string) {
    this.section = item;
  }

  addCount(event: { counter: number; totalValue: number }) {
    this.countSelectedItems = event.counter;
    this.generalValue = event.totalValue;
  }
}
