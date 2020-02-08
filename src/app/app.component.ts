import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isLoggedIn = false;
  isLoggedOut = true;

  constructor(private authService:AuthService, private router: Router){}

  ngOnInit(){
   
  }

  login(){
    this.isLoggedIn = true;
    this.isLoggedOut = false
    this.router.navigate(['/dashboard/start'])
  }

  logout(){
    this.isLoggedOut = true;
    this.isLoggedIn = false;
  }
}
