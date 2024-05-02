import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
//import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { BrandsControllerService, GetAllBrandResponse } from '../../../../shared/services/api';
//import { BrandsService } from '../../services/brands.service';

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
  //@Output() selectBrand = new EventEmitter<BrandListItemDto | null>();
  @Output() selectBrand = new EventEmitter<GetAllBrandResponse | null>();

  //brands!: BrandListItemDto[];
  brands!: GetAllBrandResponse[];

  //selectedBrand: BrandListItemDto | null = null;
  selectedBrand: GetAllBrandResponse | null = null;
  initialSelectedBrandIndex: number | null = null;

  // brandsService: BrandsService;
  constructor(private brandsService: BrandsControllerService, private change: ChangeDetectorRef) {
    // this.brandsService = brandsService;
  }

  // ngOnInit component ilk yerleştiğinde bir kez çalışır.
  ngOnInit(): void {
    this.getBrandsList();
  }

  getBrandsList() {
    // subscribe olduk, subscribe olduğu anda çalışır
    this.brandsService.getAll4().subscribe((response) => {
      this.brands = response;
      console.log("bbb" + JSON.stringify(this.brands));

      //this.setSelectedBrand();
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

  get brandsMenuItems(): MenuItem[] {
    console.log("aaa" + JSON.stringify(this.brands));
    return this.brands?.map((brand) => {
      return {
        label: brand.name!, // ! işareti null olmayan bir değer olduğunu belirtir
        click: (_: MouseEvent) => this.onSelectBrand(brand),
      };
    });
  }
}