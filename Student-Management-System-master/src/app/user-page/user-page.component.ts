// src/app/pages/user-page/user-page.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent implements OnInit {
  username: string;
  email: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const user = this.authService.getUserDetails();
    this.username = user.username;
    this.email = user.email;
  }

  viewProfile(): void {
    this.router.navigate(['/profile']);
  }

  editSettings(): void {
    this.router.navigate(['/settings']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
