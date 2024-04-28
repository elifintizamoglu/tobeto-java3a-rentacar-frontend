import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  MenuComponent,
  MenuItem,
} from '../../../../shared/components/menu/menu.component';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brands-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './brands-list-menu.component.html',
  styleUrl: './brands-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListMenuComponent implements OnInit {
  @Input() initialSelectedBrandId: number | null = null;
  @Output() selectBrand = new EventEmitter<BrandListItemDto | null>();

  brands!: BrandListItemDto[];
  selectedBrand: BrandListItemDto | null = null;
  initialSelectedBrandIndex: number | null = null;

  // brandsService: BrandsService;
  constructor(private brandsService: BrandsService) {
    // this.brandsService = brandsService;
  }

  // ngOnInit component ilk yerleştiğinde bir kez çalışır.
  ngOnInit(): void {
    this.getBrandsList();
  }

  getBrandsList() {
    this.brands = this.brandsService.getBrands();
    if (this.initialSelectedBrandId) { // selectedBrandId var ise atamasını gerçekleştirir
      this.selectedBrand = this.brands.find(brand => brand.id === this.initialSelectedBrandId) ?? null;
      this.initialSelectedBrandIndex = this.brands.findIndex((brand) => brand.id === this.initialSelectedBrandId);
    }
  }

  onSelectBrand(brand: BrandListItemDto) {
    this.selectedBrand = this.selectedBrand?.id !== brand.id ? brand : null;
    this.selectBrand.emit(this.selectedBrand);
  }

  get brandsMenuItems(): MenuItem[] {
    return this.brands.map((brand) => {
      return {
        label: brand.name,
        click: (_: MouseEvent) => this.onSelectBrand(brand),
      };
    });
  }
}