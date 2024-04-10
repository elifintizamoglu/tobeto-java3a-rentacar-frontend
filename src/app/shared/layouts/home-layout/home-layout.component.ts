import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ButtonComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

}
