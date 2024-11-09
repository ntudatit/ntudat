// src/app/pages/moderator-page/moderator-page.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-moderator-page',
  templateUrl: './moderator-page.component.html'
})
export class ModeratorPageComponent implements OnInit {
  username: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const userDetails = this.authService.getUserDetails();
    if (userDetails) {
      this.username = userDetails.username;
    }
  }

  reviewReports(): void {
    this.router.navigate(['/reports']);
  }

  manageUsers(): void {
    this.router.navigate(['/users']);
  }

  viewAnalytics(): void {
    this.router.navigate(['/analytics']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
