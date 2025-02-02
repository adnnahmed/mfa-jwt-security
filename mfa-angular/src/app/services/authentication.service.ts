import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../models/register-request';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';
import { VerificationRequest } from '../models/verification-request';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl:string = 'http://localhost:8080/api/v1/auth'

  constructor(
    private http:HttpClient, private router: Router
  ) { }

  register(
    registerRequest: RegisterRequest
  ) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/register`, registerRequest);
  }

  login(
    authRequest: AuthenticationRequest
  ) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/authenticate`, authRequest);
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/verify`, verificationRequest);
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('token'); // Get the JWT token from local storage
    if (!token) {
      // If no token is found, return an empty observable (not expected in most cases)
      return new Observable(observer => observer.complete());
    }

    // Prepare the HTTP headers with the token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Make a request to the backend to invalidate the token
    return this.http.post(`${this.baseUrl}/logout`, {}, { headers });
  }
}
