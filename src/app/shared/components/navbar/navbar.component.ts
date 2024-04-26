import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

/*
export interface NavItemInterface {
  label: string;
}

export type NavItem = NavItemInterface;
*/

export type NavItem = {
  label: string;
  link: string;
};

export type NavTitle = {
  text: string;
  routerLink?: string | string[];
} | undefined; // NavTitle type'ı bu obje ya da undefined olabilir demek

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, //ngFor
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

  isUrl(url: string): boolean {
    return url.startsWith('http') || url.startsWith('https');

    // const urlRegex = new RegExp(/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/);
    // return urlRegex.test(url);
  }

}
