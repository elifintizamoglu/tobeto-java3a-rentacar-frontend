import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { RentalsListBaseComponent } from '../rentals-list-base/rentals-list-base.component';
import { RentalsControllerService } from '../../../../shared/services/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rentals-list-table',
  standalone: true,
  imports: [
    CommonModule,
    TableDirective, 
    ButtonComponent, 
    RouterModule,
  ],
  templateUrl: './rentals-list-table.component.html',
  styleUrl: './rentals-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentalsListTableComponent extends RentalsListBaseComponent{
  deletingRentalId: number | null = null;

  constructor(rentalsService: RentalsControllerService,
     private toastr: ToastrService,
    change: ChangeDetectorRef) {
    super(rentalsService, change);
  }

  deleteRental(id: number) {

    if (this.deletingRentalId !== null) return;
    this.deletingRentalId = id;

    this.rentalsService.deleteRentalById({ id: id }).subscribe({
      complete: () => {
        this.toastr.success('Rental deleted succesfully.');
        this.getRentalsList();
        this.deletingRentalId = null;
      },
      error: (error) => {
        this.deletingRentalId = null;
        if (error.error && error.error.detail) {
          this.toastr.error(error.error.detail);
        } else {
          this.toastr.error('An unexpected error occurred. Please try again.');
        }
      }
    });
  }
 }
