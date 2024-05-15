import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { GetAllBrandResponse } from '../../../../shared/services/api';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HomeLayoutComponent } from '../../../../shared/layouts/home-layout/home-layout.component';
import { BrandsListMenuComponent } from '../../../brands/components/brands-list-menu/brands-list-menu.component';
import { ModelsCardListComponent } from '../../../models/components/models-card-list/models-card-list.component';
import { ModelsListMenuComponent } from '../../../models/components/models-list-menu/models-list-menu.component';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    ButtonComponent,
    BrandsListMenuComponent,
    ModelsCardListComponent,
    ModelsListMenuComponent,
    RouterModule,
  ],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListComponent {
  selectedBrandId: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSelectedBrandIdFromRoute();
  }

  // brand/1 // Route params
  // ?brandId=1 // Query params
  getSelectedBrandIdFromRoute() {  // route'u url'i kontrol ediyor olucaz. query parametresi varsa o id'yi state olarak buraya atayabilicez.
    this.route.queryParams.subscribe((params) => {
      // bu şekilde objenin alanlarına erişmeye çalışır params['brandId'] ile 
      if (params['brandId'] && this.selectedBrandId !== Number.parseInt(params['brandId']))  // brandId varsa ve selectedBrandId ile queryParamdan farklıysa o zaman ata
        this.selectedBrandId = Number.parseInt(params['brandId']); // string geleceği için int'e çeviriyoruz
    });
  }

  onSelectBrand(selectedBrand: GetAllBrandResponse | null) {
    this.selectedBrandId = selectedBrand?.id ?? null; //sol taraf boş bir değerse sağdaki değeri geç

    if (this.selectedBrandId !== null)  // selected brand varsa route değiştirmek istemiyoruz / selectedBrandId null değilse if'in içine gir
      this.router.navigate(['/cars'], { // birinci parametre path'i değiştirmek için ne gireceğimizi gösterir. 
        queryParams: {
          brandId: this.selectedBrandId, // ?brandId=1
        },
      });
    else this.router.navigate(['/cars']);

  }
 }
