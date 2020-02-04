import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';

const API_KEY = '1234';
const AUTHSTORAGEKEY = 'jamTechUser';

interface AuthResponseData {
  kind:string;
  idToken:string;
  email:string,
  refreshToken:string;
  expiresIn: string;
  localId:string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user = new BehaviorSubject<User>(null)
  tokenExpirationTimer;

  constructor(private http:HttpClient, private router:Router) { }

  get user() {
    return this._user.asObservable();
  }

  signUp(email:string,password:string){
    return this.http.post<AuthResponseData>(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`,{
        email: email, password : password, returnSecureToken: true
      }
    ).pipe(
      catchError(errorResponse => {
        this.handleError(errorResponse.error.error.message);
        return throwError(errorResponse)
    }),
    tap(resData => {
      if (resData && resData.idToken){
        this.handleLogin(email,resData.idToken, resData.localId,parseInt(resData.expiresIn))
      }
    }));
  }

  login(email:string,password:string){
    return this.http.post<AuthResponseData>(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`,{
        email: email, password : password, returnSecureToken: true
      }
    ).pipe(
      catchError(errorResponse => {
        this.handleError(errorResponse.error.error.message);
        return throwError(errorResponse)
    }),
    tap(resData => {
      if (resData && resData.idToken){
        this.handleLogin(email,resData.idToken, resData.localId,parseInt(resData.expiresIn))
      }
    }));;
  }

  logout(){
    this._user.next(null);
    localStorage.removeItem(AUTHSTORAGEKEY)
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }
   this.router.navigate(['/login'])
  }

  autoLogin(){
    if( !localStorage.getItem(AUTHSTORAGEKEY)  ){
      return of(false);
    }
    const userData: {email:string,id:string,_token:string,_tokenExpiration:string} = JSON.parse(localStorage.getItem(AUTHSTORAGEKEY));
    const loadedUser = new User ( userData.email,userData.id,userData._token, new Date(userData._tokenExpiration) )

    if(loadedUser.isAuth){
      this._user.next(loadedUser)
      this.autoLogout(loadedUser.timeToExpiry)
      //navigate somewhere
      return of(true)
    }

    return of(false)
  }

  autoLogout(expiryDuration:number){
    this.tokenExpirationTimer = setTimeout(()=> this.logout(), expiryDuration)
  }

  private handleLogin(email:string, token:string, userId:string, expiresIn:number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(email, userId, token, expirationDate);
        
        localStorage.setItem(AUTHSTORAGEKEY, JSON.stringify(user))
        this.autoLogout(user.timeToExpiry)
        this._user.next(user)
        
  }

  private handleError(errorMessage:string){
    switch (errorMessage) {
      case 'EMAIL_EXIST':
        alert('Email address exists')     
        break;
      case 'INVALID_PASSWORD':
        alert('Your password is invalid')
        break;    
      default:
        alert('Authentication failed, please check your credentials.')
        break;
    }
  }

}
