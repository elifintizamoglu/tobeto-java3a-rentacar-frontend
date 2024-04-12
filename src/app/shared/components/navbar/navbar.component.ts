import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

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

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, //ngFor
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  @Input() navItems: NavItem[] = [];

  isUrl(url: string): boolean {
    return url.startsWith('http') || url.startsWith('https');

    // const urlRegex = new RegExp(/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/);
    // return urlRegex.test(url);
  }

}
