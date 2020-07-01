import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/Alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  login(): any {
    this.authService.login(this.model).subscribe(
      (next) => {
        this.alertify.success('logged in successfully');
      },
      (error) => {
        this.alertify.error('failed');
      },
      ()=> {
        this.router.navigate(['/members'])
      }
    );
  }
  loggedIn(): any {
    return this.authService.loggedIn();
  }

  logOut(): any {
    localStorage.removeItem('token');
    this.alertify.error('logged out');
    this.router.navigate(['/home'])
  }
}
