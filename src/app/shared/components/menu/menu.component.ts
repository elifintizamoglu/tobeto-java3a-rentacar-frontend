import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export type MenuItem = {
  label: string;
  routeLink?: string;
  click?: (event: MouseEvent) => void;
};

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input() selectedItemIndex: number | null = null;
  @Input() items: MenuItem[] = [];

  onItemClick(event: MouseEvent, menuItem: MenuItem, itemIndex: number) {
    this.selectedItemIndex =
      this.selectedItemIndex !== itemIndex ? itemIndex : null;

    if (menuItem.click) {
      menuItem.click(event);
    }
  }
}