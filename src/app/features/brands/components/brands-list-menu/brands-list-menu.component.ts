import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { BrandsListBaseComponent } from '../brands-list-base/brands-list-base.component';
import {  SelectBoxComponent } from '../../../../shared/components/select-box/select-box.component';
import { GetAllBrandResponse } from '../../../../shared/services/api';

@Component({
  selector: 'app-brands-list-menu',
  standalone: true,
  imports: [CommonModule, SelectBoxComponent],
  templateUrl: './brands-list-menu.component.html',
  styleUrl: './brands-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListMenuComponent extends BrandsListBaseComponent implements OnInit {

  get brandsBoxItems(): GetAllBrandResponse[] {
    return this.brands ?? [];
  }
}