import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MENU_ITEMS } from '../menu.config';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [MenubarModule, RouterOutlet],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss',
})
export class BaseLayoutComponent {
  protected readonly menuItems = MENU_ITEMS;
}
