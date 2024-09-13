import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './core/base-layout/base-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './features/courses-list/pages/course-list/course-list.component'
          ).then((m) => m.CourseListComponent),
      },
      {
        path: 'course/:id',
        loadComponent: () =>
          import(
            './features/courses-list/pages/course-details/course-details.component'
          ).then((m) => m.CourseDetailsComponent),
      },
    ],
  },
];
