import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddBrandFormComponent } from '../../../features/brands/components/add-brand-form/add-brand-form.component';

@Component({
  selector: 'app-management-brands-page',
  standalone: true,
  imports: [
    CommonModule,
    AddBrandFormComponent,
  ],
  templateUrl: './management-brands-page.component.html',
  styleUrl: './management-brands-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementBrandsPageComponent { }
