import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { ModelsControllerService } from '../../../../shared/services/api';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-models-list-table',
  standalone: true,
  imports: [
    CommonModule,
    TableDirective,
    ButtonComponent,
    RouterModule,
    NgxPaginationModule,
  ],
  templateUrl: './models-list-table.component.html',
  styleUrl: './models-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListTableComponent extends ModelsListBaseComponent {

  deletingModelId: number | null = null;

  page: number = 1;
  itemsPerPage: number = 6;

  constructor(private modelsControllerService: ModelsControllerService, change: ChangeDetectorRef, private toastr: ToastrService) {
    super(modelsControllerService, change);
  }

  deteteModel(id: number) {

    if (this.deletingModelId !== null) return;
    this.deletingModelId = id;

    this.modelsControllerService.deleteModelById({ id: id }).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.toastr.success(response.message);
        } else {
          this.toastr.error(response.message);
        }
        this.deletingModelId = null;
      },
      error: (error) => {
        this.deletingModelId = null;
        if (error.error && error.error.message) {
          this.toastr.error(error.error.message);
        } else {
          this.toastr.error('An unexpected error occurred. Please try again.');
        }
      },
      complete: () => {
        this.getModelsList();
      }
    });
  }
}
