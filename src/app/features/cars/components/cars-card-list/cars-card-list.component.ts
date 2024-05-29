import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GetCarsByFiltersResponse } from '../../../../shared/services/api';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-cars-card-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    NgxPaginationModule,
  ],
  templateUrl: './cars-card-list.component.html',
  styleUrl: './cars-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsCardListComponent {

  @Input() cars: GetCarsByFiltersResponse[] = [];
  page: number = 1;  // Başlangıç sayfa numarası
  itemsPerPage: number = 4;  // Sayfa başına gösterilecek öğe sayısı


  https: string | undefined;

  constructor(private toastr: ToastrService, private router: Router) { }

  trackByCarId(index: number, car: GetCarsByFiltersResponse): number | undefined {
    return car.id;
  }

  onRentButtonClick(carId: number) {
    this.router.navigate(['/car/detail', carId]);
  }
}
