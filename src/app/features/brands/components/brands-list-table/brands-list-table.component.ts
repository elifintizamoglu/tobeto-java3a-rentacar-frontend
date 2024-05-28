import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { BrandsListBaseComponent } from '../brands-list-base/brands-list-base.component';
import { TableDirective } from '../../../../shared/directives/table.directive';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { BrandsControllerService } from '../../../../shared/services/api';

@Component({
  selector: 'app-brands-list-table',
  standalone: true,
  imports: [
    CommonModule, TableDirective, ButtonComponent, RouterModule,
  ],
  templateUrl: './brands-list-table.component.html',
  styleUrl: './brands-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListTableComponent extends BrandsListBaseComponent {

  constructor(brandsService: BrandsControllerService,
    change: ChangeDetectorRef) {
    super(brandsService, change);
  }

  deleteBrand(id: number) {
    this.brandsService.deleteBrandById({ id: id }).subscribe({
      complete: () => {
        this.getBrandsList();
      },
    });
  }
}
