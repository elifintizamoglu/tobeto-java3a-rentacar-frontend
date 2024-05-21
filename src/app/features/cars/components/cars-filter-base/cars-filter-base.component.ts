import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Injectable } from '@angular/core';
import { BrandsControllerService, CarsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllTransmissionResponse, GetCarsByFiltersRequestParams, GetCarsByFiltersResponse, GetModelsByBrandIdRequestParams, GetModelsByBrandIdResponse, ModelsControllerService, TransmissionsControllerService } from '../../../../shared/services/api';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

@Injectable({
  providedIn: 'root'
})
export class CarsFilterBaseComponent {
  constructor(
    private brandService: BrandsControllerService,
    private modelService: ModelsControllerService,
    private fuelService: FuelsControllerService,
    private transmissionService: TransmissionsControllerService,
    
  ) { }

  getBrands(): Observable<GetAllBrandResponse[]> {
    return this.brandService.getAllBrands();
  }

  getModelsByBrandId(params: GetModelsByBrandIdRequestParams): Observable<GetModelsByBrandIdResponse[]> {
    return this.modelService.getModelsByBrandId(params);
  }

  getFuels(): Observable<GetAllFuelResponse[]> {
    return this.fuelService.getAllFuels();
  }

  getTransmissions(): Observable<GetAllTransmissionResponse[]> {
    return this.transmissionService.getAllTransmissions();
  }

}
