import { Routes } from '@angular/router';
import { StartPage } from './startPage/starеPage';
import { MainPage } from './mainPage/mainPage';

export const routes: Routes = [
  {
    path: "",
    component: StartPage
  },
  {
    path: "main",
    component: MainPage
    // loadComponent: () => import('./mainPage/mainPage').then(m => m.MainPage)
  }
];
