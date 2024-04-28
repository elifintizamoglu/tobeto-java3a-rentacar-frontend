import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-management-brands-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './management-brands-page.component.html',
  styleUrl: './management-brands-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementBrandsPageComponent { }
