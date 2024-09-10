import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './core/base-layout/base-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [],
  },
];
