import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthenticateRequestParams, AuthenticationRequest, AuthenticationService } from '../../shared/services/api';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../../features/token/token.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

  authRequest: AuthenticateRequestParams = {
    authenticationRequest: {
      email: '',
      password: ''
    }
  };
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {
  }

  login() {
    this.errorMsg = [];
    this.authService.authenticate(this.authRequest).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;
        this.router.navigate(['cars']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }

  register() {
    this.router.navigate(['cars']);
  }
}
