import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // state
  title = 'JavaFS3ARentACar';
  counter: number = 0;

  brands = [
    { id: 1, name: 'Audi', discontinued: false },
    { id: 2, name: 'BMW', discontinued: false },
    { id: 3, name: 'Chevrolet', discontinued: true },
    { id: 4, name: 'Ford', discontinued: false },
    { id: 5, name: 'Honda', discontinued: false },
    { id: 6, name: 'Hyundai', discontinued: false },
    { id: 7, name: 'Mercedes-Benz', discontinued: true },
    { id: 8, name: 'Nissan', discontinued: false },
    { id: 9, name: 'Toyota', discontinued: false },
    { id: 10, name: 'Volkswagen', discontinued: false }
  ];

  onIncrementCounter() {
    ++this.counter;
  }

  pageSize = 5;
  onLoadMoreBrands() {

    this.pageSize += 5;

    /*this.brands.push(
      { id: 11, name: 'Mazda', discontinued: false },
      { id: 11, name: 'Kia', discontinued: false });
      */
  }
}
