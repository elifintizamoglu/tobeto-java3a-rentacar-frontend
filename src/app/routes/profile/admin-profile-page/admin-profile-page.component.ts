import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { AdminSidebarComponent } from '../../../shared/components/admin-sidebar/admin-sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    AdminSidebarComponent,
    RouterModule,
  ],
  templateUrl: './admin-profile-page.component.html',
  styleUrl: './admin-profile-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminProfilePageComponent { }
