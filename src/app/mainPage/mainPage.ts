import { Component } from '@angular/core';
import { LeftPanel } from '../shared/components/panel/leftPanel/leftPanel.component';
import { RightPanel } from '../shared/components/panel/rightPanel/rightPanel.component';

@Component({
  selector: 'app-main',
  templateUrl: './mainPage.html',
  styleUrl: './mainPage.css',
  imports: [LeftPanel, RightPanel]
})
export class MainPage { }
