import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { GetAllRentalResponse, RentalsControllerService } from '../../../../shared/services/api';

@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentalsListBaseComponent {

  rentals!: GetAllRentalResponse[];
  rentalsService: RentalsControllerService;

  constructor(rentalsService: RentalsControllerService, private change: ChangeDetectorRef) {
    this.rentalsService = rentalsService;
  }

  ngOnInit(): void {
    this.getRentalsList();
  }

  getRentalsList() {
    this.rentalsService.getAllRentals().subscribe((response) => {
      this.rentals = response;
      this.change.markForCheck();
    });
  }
}
