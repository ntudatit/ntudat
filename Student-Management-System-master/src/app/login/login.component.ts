import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';

  constructor(private auth : AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  OnUserLogin(){
    if (this.username == ''){
      alert('please enter your username');
      return;
    }

    if (this.password == ''){
      alert('please enter your password');
      return;
    }

  this.auth.login(this.username, this.password).pipe()
  .subscribe({
      next: () => {
          if (this.auth.hasRole('ROLE_ADMIN')) {
            this.router.navigate(['dashboard']);
          }
          if (this.auth.hasRole('ROLE_USER')) {
            this.router.navigate(['user']);
          }
          if (this.auth.hasRole('ROLE_MODERATOR')) {
            this.router.navigate(['moderator']);
          }
      },
      error: error => {
          alert("Authentication failed.");
      }
  });;

  this.username = '';
  this.password = '';
  }
}
