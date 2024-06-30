import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer class="text-center bg-dark text-light">
    <div class="container pt-4">
      <div class="row">
        <div class="col-md-5 ms-5 me-5 mb-4 text-start">
          <h6>About</h6>
          <p>
            This webpage developed by Elif İntizamoğlu for educational purposes.
          </p>
        </div>
        
        <div class="col-md-4 ms-5 me-5 mb-4 text-start">
          <h6>Contact</h6>
          <p>
            If you have any questions, feel free to reach out.
          </p>
          <a
            class="btn btn-link btn-floating btn-lg text-body ms-5 social-btn"
            href="https://www.linkedin.com/in/elif-intizamoglu/"
            role="button"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          
          <a
            class="btn btn-link btn-floating btn-lg text-body ms-5 social-btn"
            href="https://github.com/elifintizamoglu"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
          
          <a
            class="btn btn-link btn-floating btn-lg text-body ms-5 social-btn"
            href="mailto:elifintizam@gmail.com"
            role="button"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2024 Copyright
    </div>
  </footer>
  `,
  styles: [`
    footer {
      background-color: #343a40;
      color: white;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    h6 {
      color: #ffce00;
      text-align: left;
    }
    .social-btn {
      color: white !important;
    }
    .social-btn:hover {
      color: #ccc !important;
    }
    .text-body {
      color: white !important;
    }
    .list-unstyled {
      list-style: none;
      padding: 0;
    }
    .list-unstyled li {
      margin-bottom: 0.5rem;
    }
    p {
      text-align: left;
    }
  `]
})
export class FooterComponent {}
