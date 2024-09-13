import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [ButtonModule, DividerModule, TabViewModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
})
export class CourseDetailsComponent {
  score: number = 8.65;
  creators: string[] = ['Creator 1', 'Creator 2', 'Creator 3'];
  tags: string[] = ['Tag 1', 'Tag 2', 'Tag 3'];
}
