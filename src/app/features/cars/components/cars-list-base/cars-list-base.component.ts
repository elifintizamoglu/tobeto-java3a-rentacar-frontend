import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { GetAllBrandResponse, BrandsControllerService, CarsControllerService, GetAllCarResponse } from '../../../../shared/services/api';

@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListBaseComponent {

  cars!: GetAllCarResponse[];
  carsService: CarsControllerService;

  constructor(carsService: CarsControllerService, private change: ChangeDetectorRef) {
    this.carsService = carsService;
  }

  ngOnInit(): void {
    this.getBrandsList();
  }

  getBrandsList() {
    this.carsService.getAllCars().subscribe((response) => {
      this.cars = response;
      this.change.markForCheck(); // değişip değişmediğini kontrol et
    });
  }
}
