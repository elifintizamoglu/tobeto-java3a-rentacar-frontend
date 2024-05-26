import type { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { TokenService } from '../../features/token/token.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateChildFn = (route, state) => {
  const tokenService = inject(TokenService);

  if(!tokenService.token)
    return false;
  return true;
};
