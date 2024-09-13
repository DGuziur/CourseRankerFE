import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [ButtonModule, TabViewModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss',
})
export class CourseDetailsComponent {
  activeIndex: number = 0;

  score: number = 8.65;
}
