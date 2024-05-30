import { Component } from '@angular/core';
import { NavItem, NavTitle, NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    RouterModule,
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

  navTitle: NavTitle = { text: 'Rent A Car', routerLink: '/' };

  navItems: NavItem[] = [
    { label: 'Cars', link: '/cars' },
  ];

}
