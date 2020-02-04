import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlSegment, Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { take, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private router: Router){}

    
    canLoad(route:Route, segments: UrlSegment[]):Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.user.pipe(
            take(1),
            (switchMap(currentUser => {
                if(!currentUser || !currentUser.token){
                    return this.authService.autoLogin();
                }
                return of(true)
            })),
            tap(isAuth => {
                if (!isAuth){
                    this.router.navigate(['/login'])
                } 

            })
        );
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }


}
