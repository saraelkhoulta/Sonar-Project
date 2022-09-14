import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@shared/services';

export const ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login-page/login-page.component').then(
        mod => mod.LoginPageComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home-page/home-page.component').then(
        mod => mod.HomePageComponent
      ),
    // Since Angular 14.2 we can write functional guards and resolvers
    canActivate: [() => inject(AuthService).isAuthenticated()],
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
