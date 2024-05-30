import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-edit-rental-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './management-edit-rental-page.component.html',
  styleUrl: './management-edit-rental-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementEditRentalPageComponent implements OnInit { 

  rentalId!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRentalIdFromRoute();
  }

  private getRentalIdFromRoute() {
    this.route.params.subscribe((params) => {
      const rentalId = params['rentalId'];
      if (!rentalId) return;

      this.rentalId = Number(rentalId);

    });
  }
}
