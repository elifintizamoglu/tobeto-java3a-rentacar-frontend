import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer class="text-center bg-dark text-light">
    <div class="container pt-4">
      <section class="mb-4">
        
        <a
          class="btn btn-link btn-floating btn-lg text-body m-1 social-btn"
          href="https://www.linkedin.com/in/elif-intizamoglu/"
          role="button"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        
        <a
          class="btn btn-link btn-floating btn-lg text-body m-1 social-btn"
          href="https://github.com/elifintizamoglu"
          role="button"
        >
          <i class="fab fa-github"></i>
        </a>
      </section>
    </div>
    
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2024 Copyright
    </div>
  </footer>
  `,
  styles: [`
    footer {
      background-color: #343a40; 
    }
    .social-btn {
      color: white !important;
    }
    .social-btn:hover {
      color: #ccc !important;
    }
  `]
})
export class FooterComponent {}