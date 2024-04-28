import type { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //const authService = inject(AuthService);

  if(!localStorage.getItem('token'))
    return false;

  const token = localStorage.getItem('token');
  // if(token.expire < Date.now())
  //   return false;

  const requiredRoles = route.data['requiredRoles'];
  // if(!token.roles.some(role => requiredRoles.includes(role)))
  //   return false;

  return true;
};
