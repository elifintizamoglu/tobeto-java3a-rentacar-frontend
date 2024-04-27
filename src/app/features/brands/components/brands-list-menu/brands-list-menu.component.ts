import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
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
  @Output() selectBrand = new EventEmitter<BrandListItemDto | null>();

  brands!: BrandListItemDto[];
  selectedBrand: BrandListItemDto | null = null;

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