import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const IS_AUTHENTICATED = true;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    if (!IS_AUTHENTICATED) {
      this.router.navigate(['/login']);
    }
    return IS_AUTHENTICATED;
  }
}
