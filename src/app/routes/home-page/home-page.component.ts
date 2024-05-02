import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BrandsListMenuComponent } from '../../features/brands/components/brands-list-menu/brands-list-menu.component';
import { BrandListItemDto } from '../../features/brands/models/brand-list-item-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllBrandResponse } from '../../shared/services/api';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    ButtonComponent,
    BrandsListMenuComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  selectedBrandId: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getSelectedBrandIdFromRoute();
  }

  // brand/1 // Route params
  // ?brandId=1 // Query params
  getSelectedBrandIdFromRoute() {  // route'u url'i kontrol ediyor olucaz. query parametresi varsa o id'yi state olarak buraya atayabilicez.
    this.route.queryParams.subscribe((params) => {
      // bu şekilde objenin alanlarına erişmeye çalışır params['brandId'] ile 
      if(params['brandId'] && this.selectedBrandId !== Number.parseInt(params['brandId']))  // brandId varsa ve selectedBrandId ile queryParamdan farklıysa o zaman ata
        this.selectedBrandId = Number.parseInt(params['brandId']); // string geleceği için int'e çeviriyoruz
    });
  }

  onSelectBrand(seletedBrand: GetAllBrandResponse | null) {
    this.selectedBrandId = seletedBrand?.id ?? null; //sol taraf boş bir değerse sağdaki değeri geç

    if (this.selectedBrandId !== null)  // selected brand varsa route değiştirmek istemiyoruz / selectedBrandId null değilse if'in içine gir
      this.router.navigate([''], { // birinci parametre path'i değiştirmek için ne gireceğimizi gösterir. 
        queryParams: {
          brandId: this.selectedBrandId, // ?brandId=1
        },
      });
    else this.router.navigate(['']);

  }
}