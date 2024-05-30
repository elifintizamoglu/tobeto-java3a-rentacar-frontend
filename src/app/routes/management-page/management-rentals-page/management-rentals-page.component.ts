import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RentalsListTableComponent } from '../../../features/rentals/components/rentals-list-table/rentals-list-table.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-rentals-page',
  standalone: true,
  imports: [
    CommonModule,  
    RentalsListTableComponent,
    RouterModule,
  ],
  templateUrl: './management-rentals-page.component.html',
  styleUrl: './management-rentals-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementRentalsPageComponent { }
