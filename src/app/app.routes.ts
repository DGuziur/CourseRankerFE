import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './core/base-layout/base-layout.component';

export const routes: Routes = [
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
