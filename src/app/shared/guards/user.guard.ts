import type { CanActivateFn } from '@angular/router';
import { TokenService } from '../../features/token/token.service';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  if(tokenService.isUser())
    return true;
  return false;
};
