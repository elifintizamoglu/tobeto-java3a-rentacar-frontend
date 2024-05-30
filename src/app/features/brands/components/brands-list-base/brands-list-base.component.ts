import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { GetAllBrandResponse, BrandsControllerService } from '../../../../shared/services/api';

@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListBaseComponent {

  brands!: GetAllBrandResponse[];
  brandsService: BrandsControllerService;

  constructor(brandsService: BrandsControllerService, private change: ChangeDetectorRef) {
    this.brandsService = brandsService;
  }

  ngOnInit(): void {
    this.getBrandsList();
  }

  getBrandsList() {
    this.brandsService.getAllBrands().subscribe((response) => {
      this.brands = response;
      this.change.markForCheck();
    });
  }
}
