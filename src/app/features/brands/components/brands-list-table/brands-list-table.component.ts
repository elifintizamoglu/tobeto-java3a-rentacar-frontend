import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BrandsListBaseComponent } from '../brands-list-base/brands-list-base.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { BrandsControllerService } from '../../../../shared/services/api';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-brands-list-table',
  standalone: true,
  imports: [
    CommonModule, 
    TableDirective, 
    ButtonComponent, 
    RouterModule,
    NgxPaginationModule,
  ],
  templateUrl: './brands-list-table.component.html',
  styleUrl: './brands-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListTableComponent extends BrandsListBaseComponent {

  deletingBrandId: number | null = null;

  page: number = 1;
  itemsPerPage: number = 6;

  constructor(brandsService: BrandsControllerService, private toastr: ToastrService,
    change: ChangeDetectorRef) {
    super(brandsService, change);
  }

  deleteBrand(id: number) {

    if (this.deletingBrandId !== null) return;
    this.deletingBrandId = id;

    this.brandsService.deleteBrandById({ id: id }).subscribe({
      next: (response: any) => {
        if(response.success){
          this.toastr.success(response.message);
        } else {
          this.toastr.error(response.message);
        }
        this.deletingBrandId = null;
      },
      error: (error) => {
        this.deletingBrandId = null;
        if (error.error && error.error.message) {
          this.toastr.error(error.error.message);
        } else {
          this.toastr.error('An unexpected error occurred. Please try again.');
        }
      },
      complete: () => {
        this.getBrandsList();
      }
    });
  }
}
