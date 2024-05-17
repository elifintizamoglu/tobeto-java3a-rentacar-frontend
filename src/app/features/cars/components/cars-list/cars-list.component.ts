import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeLayoutComponent } from '../../../../shared/layouts/home-layout/home-layout.component';
import { BrandsListMenuComponent } from '../../../brands/components/brands-list-menu/brands-list-menu.component';
import { ModelsListMenuComponent } from '../../../models/components/models-list-menu/models-list-menu.component';
import { SelectBoxComponent } from '../../../../shared/components/select-box/select-box.component';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    BrandsListMenuComponent,
    SelectBoxComponent,
  ],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListComponent {

}
