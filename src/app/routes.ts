import { Routes } from '@angular/router';
import * as pages from './pages';

export const routes: Routes = [
  { path: '',        component: pages.ItemsComponent },
  { path: 'items',   component: pages.ItemsComponent },
  { path: 'widgets', component: pages.WidgetsComponent },
  { path: '*',       component: pages.ItemsComponent }
];
