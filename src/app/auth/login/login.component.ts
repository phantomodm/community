import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private fb:FormBuilder,
    private auth: AuthService,
    private router:Router
    //private store: Store<AppState>
    ) {

    this.form = fb.group({
        email: ['test@jamtech.nyc', [Validators.required]],
        password: ['test', [Validators.required]]
    }); 
  }

  ngOnInit() {
  }

  login(){

  }

}
