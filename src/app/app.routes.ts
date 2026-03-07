import { Routes } from '@angular/router';
import { StartPage } from './shared/startPage/startPage';
import { MainPage } from './shared/mainPage/mainPage';

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
