import { Routes } from '@angular/router';
import { StartPage } from './shared/startPage/startPage';

export const routes: Routes = [
  {
    path: "",
    component: StartPage
  },
  {
    path: "main",
    loadComponent: () => import('./shared/mainPage/mainPage').then(m => m.MainPage)
  }
];
