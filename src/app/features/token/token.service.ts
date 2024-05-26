import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token(): string {
    return localStorage.getItem('token') as string;
  }

  isTokenValid(): boolean {
    const token = this.token;
    if (!token) {
      return false;
    }
    const jwtHelper = new JwtHelperService();
    const isTokenExpired = jwtHelper.isTokenExpired(token);
    if (isTokenExpired) {
      localStorage.clear();
      return false;
    }
    return true;
  }

  isTokenNotValid(): boolean {
    return !this.isTokenValid();
  }

  getUserRoles(): string[] {
    const token = this.token;
    if (token) {
      const jwtHelper = new JwtHelperService();
      try {
        const decodedToken = jwtHelper.decodeToken(token);
        if (decodedToken && decodedToken.authorities) {
          return decodedToken.authorities;
        } else {
          console.error('Token does not contain authorities.');
          return [];
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        return [];
      }
    }
    return [];
  }

  isUser(): boolean {
    if (this.getUserRoles().includes('USER'))
      return true;
    return false;
  }

  isAdmin(): boolean {
    if (this.getUserRoles().includes('ADMIN'))
      return true;
    return false;
  }
}
