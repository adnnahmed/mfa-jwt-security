import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role; // Ensure 'role' is correct as per your JWT's payload
    }
    return null;
  }

  hasRole(role: string): boolean {
    return this.getUserRole() === role;
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  private decodeJwt(token: string): any {
    const parts = token.split('.');
    if (parts.length === 3) {
      const payload = parts[1];
      const decoded = JSON.parse(atob(payload));
      return decoded;
    }
    return null;
  }
}
