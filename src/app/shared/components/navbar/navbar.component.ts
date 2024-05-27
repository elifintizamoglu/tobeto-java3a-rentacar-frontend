import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { TokenService } from '../../../features/token/token.service';

export type NavItem = {
  label: string;
  link: string;
};

export type NavTitle = {
  text: string;
  routerLink?: string | string[];
} | undefined;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  @Input() navItems: NavItem[] = [];
  @Input() title: NavTitle;
  @Input() endContentTemplate?: TemplateRef<any>;

  constructor(public tokenService: TokenService) { }

  isUrl(url: string): boolean {
    return url.startsWith('http') || url.startsWith('https');
  }

}
