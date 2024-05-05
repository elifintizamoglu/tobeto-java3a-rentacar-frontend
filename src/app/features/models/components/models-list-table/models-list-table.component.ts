import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { ModelsControllerService } from '../../../../shared/services/api';

@Component({
  selector: 'app-models-list-table',
  standalone: true,
  imports: [
    CommonModule, TableDirective, ButtonComponent, RouterModule,
  ],
  templateUrl: './models-list-table.component.html',
  styleUrl: './models-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListTableComponent extends ModelsListBaseComponent {

  constructor(private modelsControllerService: ModelsControllerService, change: ChangeDetectorRef) {
    super(modelsControllerService, change);
  }

  deteteModel(id: number) {
    this.modelsControllerService.deleteModelById({ id: id }).subscribe({
      complete: () => {
        this.getModelsList();
      },
    });
  }
}
