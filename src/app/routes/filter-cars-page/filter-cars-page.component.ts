import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { CarsFilterComponent } from '../../features/cars/components/cars-filter/cars-filter.component';
import { GetCarsByFiltersResponse } from '../../shared/services/api';
import { CarsCardListComponent } from '../../features/cars/components/cars-card-list/cars-card-list.component';

@Component({
  selector: 'app-filter-cars-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    CarsFilterComponent,
    CarsCardListComponent,
  ],
  templateUrl: './filter-cars-page.component.html',
  styleUrl: './filter-cars-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterCarsPageComponent {
  cars: GetCarsByFiltersResponse[] = [];

  onCarsFiltered(cars: GetCarsByFiltersResponse[]) {
    this.cars = cars;
  }
 }
