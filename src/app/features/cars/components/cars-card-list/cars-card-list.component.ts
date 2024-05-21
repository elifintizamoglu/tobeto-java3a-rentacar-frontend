import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GetCarsByFiltersResponse } from '../../../../shared/services/api';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-cars-card-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
  ],
  templateUrl: './cars-card-list.component.html',
  styleUrl: './cars-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsCardListComponent {
  @Input() cars: GetCarsByFiltersResponse[] = [];
https: string|undefined;

  trackByCarId(index: number, car: GetCarsByFiltersResponse): number | undefined {
    return car.id;
  }
}
