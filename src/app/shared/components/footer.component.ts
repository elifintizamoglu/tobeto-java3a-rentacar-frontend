import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer class="text-light p-3">
    <div class="container">Rent Car</div>
  </footer>`,
  styles: `
  footer{
    height: 4rem;
    background-color: green;
    text-align: center;
    padding-bottom: 30px;
  }
  `
})
export class FooterComponent {

}
