import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  MenuComponent,
  MenuItem,
} from '../../../../shared/components/menu/menu.component';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';

@Component({
  selector: 'app-models-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './models-list-menu.component.html',
  styleUrl: './models-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListMenuComponent extends ModelsListBaseComponent implements OnInit {

  get modelsMenuItems(): MenuItem[] {

    return this.models?.map((model) => {
      return {
        label: model.name!, // ! işareti null olmayan bir değer olduğunu belirtir
        click: (_: MouseEvent) => this.onSelectModel(model),
      };
    }) ?? [];
  }
}