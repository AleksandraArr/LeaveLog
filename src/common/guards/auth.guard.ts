import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean | UrlTree> {
    // return this.authService.isAuthenticated.pipe(
    //   map((isAuth) => {
    //     if (isAuth) {
    //       return true;
    //     } else {
    //       return this.router.createUrlTree(['/auth/login']);
    //     }
    //   })
    // );

    const isAuth = await this.authService.getisAuthenticated();
    if (isAuth) {
      return true;
    } else {
      return this.router.createUrlTree(['/auth']);
    }
  }
}
