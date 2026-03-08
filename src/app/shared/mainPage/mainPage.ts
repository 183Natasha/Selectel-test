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
  countSelectedItems: number = 11;
  generalValue: number = 111;

  addItem(item: string) {
    // console.log('Получена секция:', item);
    this.section = item;
    // console.log(this.section)
  }
}
