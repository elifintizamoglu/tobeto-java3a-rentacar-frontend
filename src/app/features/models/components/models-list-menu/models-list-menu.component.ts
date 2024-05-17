import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';
import { SelectBoxComponent } from '../../../../shared/components/select-box/select-box.component';
import { GetAllModelResponse } from '../../../../shared/services/api';

@Component({
  selector: 'app-models-list-menu',
  standalone: true,
  imports: [CommonModule, SelectBoxComponent],
  templateUrl: './models-list-menu.component.html',
  styleUrl: './models-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListMenuComponent extends ModelsListBaseComponent implements OnInit {

  get modelsBoxItems(): GetAllModelResponse[] {

    return this.models ?? [];
  }
}