import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  get username() {
    return this.auth.getUserRoles();
  }

  ngOnInit(): void {
    
  }
  OnUserLogout(){
    this.auth.logout();
  }
}
