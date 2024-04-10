import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer class="bg-dark text-light p-3">
    <div class="container">footer works!</div>
  </footer>`,
  styles: `
  footer{
    height: 4rem;
  }
  `
})
export class FooterComponent {

}
