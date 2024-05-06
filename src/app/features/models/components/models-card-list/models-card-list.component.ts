import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';
import { ModelsControllerService } from '../../../../shared/services/api/api/models-controller.service';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { BrandsControllerService, FuelsControllerService, GetAllBrandResponse, GetAllFuelResponse, GetAllModelResponse, GetAllTransmissionResponse, TransmissionsControllerService } from '../../../../shared/services/api';

@Component({
  selector: 'app-models-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './models-card-list.component.html',
  styleUrl: './models-card-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsCardListComponent
  extends ModelsListBaseComponent
  implements OnInit {

  @Input() brandId: number | null = null;

  constructor(
    private modelsControllerService: ModelsControllerService,
    private brandsService: BrandsControllerService,
    private fuelsService: FuelsControllerService,
    private transmissionsService: TransmissionsControllerService,
    change: ChangeDetectorRef
  ) {
    super(modelsControllerService, change);
  }

  get filteredModels(): GetAllModelResponse[] {
    let newList: GetAllModelResponse[] = this.models;

    if (this.brandId)
      newList = newList.filter((model) => model.brandId === this.brandId);

    return newList;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getModelRelations();
  }

  brands: GetAllBrandResponse[] = [];
  fuels: GetAllFuelResponse[] = [];
  transmissions: GetAllTransmissionResponse[] = [];

  getModelRelations(): void {
    // Brand
    this.brandsService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
      this.change.markForCheck();
    });

    // Fuel
    this.fuelsService.getAll1().subscribe((fuels) => {
      this.fuels = fuels;
      this.change.markForCheck();
    });

    // Transmission
    this.transmissionsService
      .getAll()
      .subscribe((transmissions) => {
        this.transmissions = transmissions;
        this.change.markForCheck();
      });
  }

  getModelCardText(model: GetAllModelResponse): string {
    return `Brand: ${this.brands.find((brand) => brand.id === model.brandId)?.name
      }, Fuel: ${this.fuels.find((f) => f.id === model.fuelId)?.name
      }, Transmission: ${this.transmissions.find((t) => t.id === model.transmissionId)?.name
      }`;
  }
}