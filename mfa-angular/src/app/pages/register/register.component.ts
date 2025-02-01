import { Component } from '@angular/core';
import { RegisterRequest } from '../../models/register-request';
import { AuthenticationResponse } from '../../models/authentication-response';
import { Router } from '@angular/router';
import { VerificationRequest } from '../../models/verification-request';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerRequest: RegisterRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';
  errorMessage = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }
  registerUser() {
    this.message = '';
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            this.message = 'Account created successfuly.';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        },
        error: (error) => {
          if (error.status === 403) {
            this.errorMessage = 'An error occurred. Please try again.';
            setTimeout(() => {
              this.router.navigate(['register']);
            }, 3000)
          }
        }
      })
  }

  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Account created successfully.';
          setTimeout(() => {
            localStorage.setItem('token', response.accessToken as string);
            this.router.navigate(['welcome']);
          }, 3000)
        }
      })
  }
}
