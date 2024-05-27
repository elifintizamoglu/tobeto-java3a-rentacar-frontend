import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddBrandFormComponent } from '../../../../features/brands/components/add-brand-form/add-brand-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-create-brand-page',
  standalone: true,
  imports: [
    CommonModule, AddBrandFormComponent, RouterModule,
  ],
  templateUrl: './management-create-brand-page.component.html',
  styleUrl: './management-create-brand-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementCreateBrandPageComponent { }
