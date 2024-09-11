import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Course } from '../../types/course.type';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [ButtonModule, DataViewModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss',
})
export class CourseListComponent {
  testData: Course[] = [
    {
      title: 'Course 1',
      description: 'Course 1 description',
      image:
        'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Course 2',
      description: 'Course 2 description',
      image:
        'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Course 3',
      description: 'Course 3 description',
      image:
        'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Course 4',
      description: 'Course 4 description',
      image:
        'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Course 5',
      description: 'Course 5 description',
      image:
        'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b',
      tags: ['Angular', 'TypeScript', 'JavaScript'],
    },
  ];
}
