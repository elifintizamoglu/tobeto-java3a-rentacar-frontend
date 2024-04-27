import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MenuComponent,
  MenuItem,
} from '../../../../shared/components/menu/menu.component';

type Brand = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-brands-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './brands-list-menu.component.html',
  styleUrl: './brands-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListMenuComponent {
  brands: Brand[] = [
    // Mock data
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Ford' },
    { id: 3, name: 'Chevrolet' },
    { id: 4, name: 'Nissan' },
    { id: 5, name: 'Honda' },
    { id: 6, name: 'Jeep' },
    { id: 7, name: 'Hyundai' },
    { id: 8, name: 'Dodge' },
    { id: 9, name: 'Kia' },
    { id: 10, name: 'GMC' },
  ];

  get brandsMenuItems(): MenuItem[] {
    return this.brands.map((brand) => {
      return {
        label: brand.name,
        click: (_: MouseEvent) => {
          console.log('Brand selected:', brand.name);
        }
      };
    });
  }
}