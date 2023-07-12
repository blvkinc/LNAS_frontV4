import {ActivatedRouteSnapshot, CanActivateFn} from '@angular/router';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
) => {
  const auth = localStorage.getItem('auth');
  const userRole = auth ? JSON.parse(auth).role : null;

  const permittedRoles = route.data.roles;
  let includes = permittedRoles.includes(userRole);
  console.log('Has Permission', includes);
  return includes;
};
