import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BrandsControllerService, CarsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllModelResponse, GetAllTransmissionResponse, GetCarsByFiltersRequestParams, GetCarsByFiltersResponse, GetModelsByBrandIdRequestParams, GetModelsByBrandIdResponse, ModelsControllerService, TransmissionsControllerService } from '../../services/api';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-select-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './select-box.component.html',
  
  styleUrl: './select-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectBoxComponent implements OnInit {


  @Input() formControlName!: string;
  @Input() label!: string;
  @Input() items: any[] = [];
  @Input() itemLabelKey!: string;
  @Input() itemValueKey!: string;

  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private change: ChangeDetectorRef
  ) {
    this.filterForm = this.fb.group({
      [this.formControlName]: ['']
    });
  }

  ngOnInit() {
    this.filterForm.get(this.formControlName)?.valueChanges.subscribe(() => {
      this.change.markForCheck();
    });
  }

  // brands: GetAllBrandResponse[] = [];
  // models: GetModelsByBrandIdResponse[] = [];
  // fuels: GetAllFuelResponse[] = [];
  // transmissions: GetAllTransmissionResponse[] = [];
  // cars: GetCarsByFiltersResponse[] = [];

  // requestParams!: GetCarsByFiltersRequestParams;

  // filterForm: FormGroup;

  // constructor(
  //   private brandService: BrandsControllerService,
  //   private modelService: ModelsControllerService,
  //   private fuelService: FuelsControllerService,
  //   private transmissionService: TransmissionsControllerService,
  //   private carService: CarsControllerService,
  //   private fb: FormBuilder,
  //   private change: ChangeDetectorRef) {
  //   this.filterForm = this.fb.group({
  //     brand: [''],
  //     model: [''],
  //     fuel: [''],
  //     transmission: ['']
  //   });
  // }

  // ngOnInit() {
  //   this.getBrands();
  //   this.getFuels();
  //   this.getTransmissions();

  //   this.filterForm.get('model')?.valueChanges.subscribe(() => {
  //     this.updateFilters();
  //   });

  //   this.filterForm.get('fuel')?.valueChanges.subscribe(() => {
  //     this.updateFilters();
  //   });

  //   this.filterForm.get('transmission')?.valueChanges.subscribe(() => {
  //     this.updateFilters();
  //   });
  // }

  // searchCars() {
  //   this.updateFilters();
  //   this.getCars();
  // }

  // onChange(id: number) {
  //   this.models = [];
  //   if (id) {
  //     const requestParams: GetModelsByBrandIdRequestParams = {
  //       id: id
  //     };
  //     this.modelService.getModelsByBrandId(requestParams).subscribe(models => {
  //       this.models = models;
  //     });
  //   } else {
  //     this.models = [];
  //   }
  // }

  // getBrands(){
  //   this.brandService.getAllBrands().subscribe(brands => {
  //     this.brands = brands;
  //     this.change.markForCheck();
  //   })
  // }

  // getFuels() {
  //   this.fuelService.getAllFuels().subscribe(fuels => {
  //     this.fuels = fuels;
  //     this.change.markForCheck();
  //   })
  // }

  // getTransmissions() {
  //   this.transmissionService.getAllTransmissions().subscribe(transmissions => {
  //     this.transmissions = transmissions;
  //     this.change.markForCheck();
  //   })
  // }

  // updateFilters() {
  //   const { brand, model, fuel, transmission } = this.filterForm.value;

  //   this.requestParams = {
  //     brandId: brand ? +brand : undefined,
  //     modelId: model ? +model : undefined,
  //     fuelId: fuel ? +fuel : undefined,
  //     transmissionId: transmission ? +transmission : undefined
  //   };
  // }

  // getCars() {
  //   this.carService.getCarsByFilters(this.requestParams).subscribe(cars => {
  //     this.cars = cars;
  //     this.change.markForCheck();
  //   });
  // }
}
