import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSettingsService } from './core/user-settings/services/user-settings.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userSettings = inject(UserSettingsService);
  title = 'course-ranker';
}
