import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { GetAllBrandResponse, BrandsControllerService } from '../../../../shared/services/api';

@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListBaseComponent {
  @Input() initialSelectedBrandId: number | null = null;
  @Output() selectBrand = new EventEmitter<GetAllBrandResponse | null>();

  brands!: GetAllBrandResponse[];
  selectedBrand: GetAllBrandResponse | null = null;
  initialSelectedBrandIndex: number | null = null;
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

      if (this.initialSelectedBrandId) { // selectedBrandId var ise atamasını gerçekleştirir
        this.selectedBrand = this.brands.find(brand => brand.id === this.initialSelectedBrandId) ?? null;
        this.initialSelectedBrandIndex = this.brands.findIndex((brand) => brand.id === this.initialSelectedBrandId);
      }
      this.change.markForCheck(); // değişip değişmediğini kontrol et
    });
  }

  onSelectBrand(brand: GetAllBrandResponse) {
    this.selectedBrand = this.selectedBrand?.id !== brand.id ? brand : null;
    this.selectBrand.emit(this.selectedBrand);
  }
}
