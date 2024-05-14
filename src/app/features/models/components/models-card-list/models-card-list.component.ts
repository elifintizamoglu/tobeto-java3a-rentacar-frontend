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
import { GetAllModelResponse } from '../../../../shared/services/api';

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

  constructor(modelsControllerService: ModelsControllerService, change: ChangeDetectorRef) {
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
  }

  getModelCardText(model: GetAllModelResponse): string {
    return `Brand: ${model.brandName}, Fuel: ${model.fuelName},
     Transmission: ${model.transmissionName}`;
  }
}