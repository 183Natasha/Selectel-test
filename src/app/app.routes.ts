import { Routes } from '@angular/router';
import { StartPage } from './startPage/starPage';

export const routes: Routes = [
  {
    path: "",
    component: StartPage
  },
  {
    path: "/main",
    loadComponent: () => import('./mainPage/mainPage').then(m => m.MainPage)
  }
];
