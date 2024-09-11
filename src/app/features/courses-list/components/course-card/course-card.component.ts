import { Component, input } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { Course } from '../../types/course.type';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CardModule, TagModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  readonly course = input.required<Course>();
}
