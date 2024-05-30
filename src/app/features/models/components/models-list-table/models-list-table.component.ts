import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { ModelsControllerService } from '../../../../shared/services/api';
import { ToastrService } from 'ngx-toastr';

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

  deletingModelId: number | null = null;

  constructor(private modelsControllerService: ModelsControllerService, change: ChangeDetectorRef, private toastr: ToastrService) {
    super(modelsControllerService, change);
  }

  deteteModel(id: number) {

    if (this.deletingModelId !== null) return;
    this.deletingModelId = id;

    this.modelsControllerService.deleteModelById({ id: id }).subscribe({
      complete: () => {
        this.getModelsList();
      },
    });

    this.modelsControllerService.deleteModelById({ id: id }).subscribe({
      complete: () => {
        this.toastr.success('Brand deleted succesfully.');
        this.getModelsList();
        this.deletingModelId = null;
      },
      error: (error) => {
        this.deletingModelId = null;
        if (error.error && error.error.detail) {
          this.toastr.error(error.error.detail);
        } else {
          this.toastr.error('An unexpected error occurred. Please try again.');
        }
      }
    });
  }
}
