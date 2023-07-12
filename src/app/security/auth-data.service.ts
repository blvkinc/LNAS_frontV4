import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthDataService {

  constructor() { }

  getUserData() {
    return JSON.parse(localStorage.getItem('auth')) || null;
  }

  getUserRole() {
    return this.getUserData().role;
  }

  getAccessToken() {
    return this.getUserData().accessToken;
  }

  isAuthenticated() {
    return this.getUserData() !== null;
  }

  getRefreshToken() {
    return this.getUserData().refreshToken;
  }
}
