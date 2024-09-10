import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

type Course = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [ButtonModule, DataViewModule, TagModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
})
export class CourseListComponent {
  testData: Course[] = [
    {
      title: 'Course 1',
      description: 'Course 1 description',
      image:
        'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Course 2',
      description: 'Course 2 description',
      image:
        'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Course 3',
      description: 'Course 3 description',
      image:
        'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Course 4',
      description: 'Course 4 description',
      image:
        'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Course 5',
      description: 'Course 5 description',
      image:
        'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
  ];
}
