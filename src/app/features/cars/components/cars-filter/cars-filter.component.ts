import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarsFilterBaseComponent } from '../cars-filter-base/cars-filter-base.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GetAllBrandResponse, GetModelsByBrandIdResponse, GetAllFuelResponse, GetAllTransmissionResponse, GetCarsByFiltersResponse, GetCarsByFiltersRequestParams } from '../../../../shared/services/api';
import { SelectBoxComponent } from '../../../../shared/components/select-box/select-box.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cars-filter',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectBoxComponent,
    ButtonComponent,
  ],
  templateUrl: './cars-filter.component.html',
  styleUrl: './cars-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsFilterComponent implements OnInit {

  @Output() carsFiltered = new EventEmitter<GetCarsByFiltersResponse[]>();
  filterForm: FormGroup;
  brands: GetAllBrandResponse[] = [];
  models: GetModelsByBrandIdResponse[] = [];
  fuels: GetAllFuelResponse[] = [];
  transmissions: GetAllTransmissionResponse[] = [];
  cars: GetCarsByFiltersResponse[] = [];

  constructor(
    private filterBase: CarsFilterBaseComponent,
    private fb: FormBuilder,
    private change: ChangeDetectorRef,
  ) {
    this.filterForm = this.fb.group({
      brand: [''],
      model: [''],
      fuel: [''],
      transmission: ['']
    });
  }

  ngOnInit() {
    forkJoin({
      brands: this.filterBase.getBrands(),
      fuels: this.filterBase.getFuels(),
      transmissions: this.filterBase.getTransmissions(),
    }).subscribe(({ brands, fuels, transmissions }) => {
      this.brands = brands;
      this.fuels = fuels;
      this.transmissions = transmissions;
      this.change.detectChanges();
    });
    this.getCars();

    this.filterForm.get('brand')?.valueChanges.subscribe(id => {
      this.models = [];
      if (id) {
        this.filterBase.getModelsByBrandId({ id: +id }).subscribe(models => {
          this.models = models;
          this.filterForm.get('model')?.setValue('');
          this.change.detectChanges();
        });
      } else {
        this.models = [];
        this.filterForm.get('model')?.setValue('');
        this.change.detectChanges();
      }
    });
  }

  getCars() {
    this.filterBase.getCars().subscribe(cars => {
      this.cars = cars;
      this.carsFiltered.emit(cars);
    });
  }

  resetFilters() {
    this.filterForm.reset({
      brand: null,
      model: null,
      fuel: null,
      transmission: null
    });
  
    this.models = [];
    this.getCars();
    this.change.markForCheck();
  }

  searchCars() {
    const { brand, model, fuel, transmission } = this.filterForm.value;
    const requestParams: GetCarsByFiltersRequestParams = {
      brandId: brand ? +brand : undefined,
      modelId: model ? +model : undefined,
      fuelId: fuel ? +fuel : undefined,
      transmissionId: transmission ? +transmission : undefined,
    };

    this.filterBase.getCarsByFilters(requestParams).subscribe(cars => {
      this.cars = cars;
      this.carsFiltered.emit(cars);
      this.change.markForCheck();
    });
  }
}
