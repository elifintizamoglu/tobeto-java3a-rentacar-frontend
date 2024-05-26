import type { CanActivateFn } from '@angular/router';
import { TokenService } from '../../features/token/token.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  if(tokenService.isAdmin())
    return true;
  return false;
};
