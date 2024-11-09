import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastService } from '../services/toastr.service';
import { Router } from '@angular/router';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/signin';
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private router: Router, private toastr: ToastService) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  OnShowLoginSuccess(){
    this.toastr.showLoginSucces();
   }
 
   OnShowLoginError(){
     this.toastr.showLoginError();
   }
  
  login(username: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}`, { username, password })
      .pipe(map(user => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
      }),
      catchError(this.handleError));
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Error: ${error.error.message}`;
    } else {
        // Server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  getToken(): string | null {
    return this.userSubject.value.token;
  }

  getUserRoles(): string[] {
    return this.userSubject.value.roles;
  }

  hasRole(role: string): boolean {
    const roles = this.getUserRoles();
    return roles.includes(role);
  }


  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  getUserDetails(): { username: string; email: string } | null {
    return {
      username: this.userSubject.value.username,
      email: this.userSubject.value.email,
    };
  }
}
