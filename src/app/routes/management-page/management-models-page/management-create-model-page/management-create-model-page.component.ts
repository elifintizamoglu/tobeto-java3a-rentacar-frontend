import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddModelFormComponent } from '../../../../features/models/components/add-model-form/add-model-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-management-create-model-page',
  standalone: true,
  imports: [
    CommonModule, AddModelFormComponent, RouterModule,
  ],
  templateUrl: './management-create-model-page.component.html',
  styleUrl: './management-create-model-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementCreateModelPageComponent { }
