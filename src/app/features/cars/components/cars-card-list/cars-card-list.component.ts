import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GetCarsByFiltersResponse } from '../../../../shared/services/api';

@Component({
  selector: 'app-cars-card-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cars-card-list.component.html',
  styleUrl: './cars-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsCardListComponent {
  @Input() cars: GetCarsByFiltersResponse[] = [];
}
