import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthenticationService, RegisterRequestParams, RegistrationRequest } from '../../shared/services/api';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HomeLayoutComponent,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  registerRequest: RegisterRequestParams = {
    registrationRequest: { email: '', firstname: '', lastname: '', password: '' }
  };
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.errorMsg = [];
    this.authService.register(this.registerRequest).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        this.errorMsg = err.error.validationErrors;
      }
    });
  }
}
