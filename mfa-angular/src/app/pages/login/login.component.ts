import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../models/authentication-request';
import { AuthenticationResponse } from '../../models/authentication-response';
import { Router } from '@angular/router';
import { VerificationRequest } from '../../models/verification-request';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authRequest: AuthenticationRequest = {};
  otpCode: any;
  authResponse: AuthenticationResponse = {};
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  authenticate() {
    this.authService.login(this.authRequest)
      .subscribe({
        next: (response) => {
          this.authResponse = response;
          this.errorMessage = '';
          if (!this.authResponse.mfaEnabled) {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['welcome']);
          }
        },
        error: (error) => {
          if (error.status === 403) {
            this.errorMessage = 'Access denied. Please check your credentials or contact support.';
          } else {
            this.errorMessage = 'An error occurred. Please try again.';
          }
        }
      })
  }

  verifyCode() {
    const verifyRequest: VerificationRequest = {
      email: this.authRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken as string);
          this.router.navigate(['welcome']);
        }
      })
  }
}
