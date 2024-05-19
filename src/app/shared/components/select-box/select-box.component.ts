import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CarsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllModelResponse, GetAllTransmissionResponse, GetCarsByFiltersRequestParams, GetCarsByFiltersResponse, GetModelsByBrandIdRequestParams, GetModelsByBrandIdResponse, ModelsControllerService, TransmissionsControllerService } from '../../services/api';
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

  @Input() brands: GetAllBrandResponse[] = [];
  models: GetModelsByBrandIdResponse[] = [];
  selectedBrand: string = '';
  fuels: GetAllFuelResponse[] = [];
  transmissions: GetAllTransmissionResponse[] = [];
  cars: GetCarsByFiltersResponse[] = [];
  requestParams!: GetCarsByFiltersRequestParams;

  filterForm: FormGroup;

  constructor(private modelService: ModelsControllerService,
    private fuelService: FuelsControllerService,
    private transmissionService: TransmissionsControllerService,
    private carService: CarsControllerService,
    private fb: FormBuilder,
    private change: ChangeDetectorRef) {
    this.filterForm = this.fb.group({
      brand: [''],
      model: [''],
      fuel: [''],
      transmission: ['']
    });
  }

  ngOnInit() {
    this.getFuels();
    this.getTransmissions();

    // this.filterForm.get('brand')?.valueChanges.subscribe(brandId => {
    //   this.models = [];
    //   this.filterForm.get('model')?.setValue('');
    //   console.log(brandId);
    //   if (brandId) {
    //     const requestParams: GetModelsByBrandIdRequestParams = {
    //       id: +brandId
    //     };
    //     this.modelService.getModelsByBrandId(requestParams).subscribe(models => {
    //       this.models = models;
    //     });
    //   }
    // });

    this.filterForm.get('model')?.valueChanges.subscribe(() => {
      this.updateFilters();
    });

    this.filterForm.get('fuel')?.valueChanges.subscribe(() => {
      this.updateFilters();
    });

    this.filterForm.get('transmission')?.valueChanges.subscribe(() => {
      this.updateFilters();
    });
  }

  searchCars() {
    this.updateFilters();
    this.getCars();
  }


  onChange(id: number) {
    this.models = [];
    if (id) {
      const requestParams: GetModelsByBrandIdRequestParams = {
        id: id
      };
      this.modelService.getModelsByBrandId(requestParams).subscribe(models => {
        this.models = models;
        console.log(models);
      });
    } else {
      this.models = [];
    }
  }

  getFuels() {
    this.fuelService.getAllFuels().subscribe(fuels => {
      this.fuels = fuels;
      this.change.markForCheck();
    })
  }

  getTransmissions() {
    this.transmissionService.getAllTransmissions().subscribe(transmissions => {
      this.transmissions = transmissions;
      this.change.markForCheck();
    })
  }

  updateFilters() {
    const { brand, model, fuel, transmission } = this.filterForm.value;

    this.requestParams = {
      brandId: brand ? +brand : undefined,
      modelId: model ? +model : undefined,
      fuelId: fuel ? +fuel : undefined,
      transmissionId: transmission ? +transmission : undefined
    };

  }

  getCars() {
    this.carService.getCarsByFilters(this.requestParams).subscribe(cars => {
      this.cars = cars;
      this.change.markForCheck();
    });
  }

}
