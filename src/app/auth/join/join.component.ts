import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  form: FormGroup;
  @ViewChild('email',{static: false}) email : ElementRef;
  @ViewChild('confirmPassword',{static: false}) confirmPassword : ElementRef;
  emailControlIsValid = true;
  passwordControlIsValid = true;
  isLoading = false;
  constructor(private fb:FormBuilder,private router:Router, private authService:AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      first_name: ['',[Validators.required] ],
      last_name: ['',[Validators.required] ],
      email: ["isa@jamtech.nyc",[Validators.required] ],
      password:['',[Validators.required,Validators.minLength(6), Validators.maxLength(10), Validators.pattern] ],
      confirm_password:['',[Validators.required]]
    })

    this.form.get('email').statusChanges.subscribe(status => {
      this.emailControlIsValid = status === 'VALID'
    })

    this.form.get('password').statusChanges.subscribe(status => {
      this.passwordControlIsValid = status === 'VALID'
    })

  }



  join(){
    this.email.nativeElement.focus();
    this.confirmPassword.nativeElement.focus();
    let email = this.form.get('email').value;
    let password = this.form.get('password').value;
    let confirmPassword = this.form.get('confirmPassword').value;

    if (confirmPassword = password){
      this.authService.signUp(email,password).subscribe(resData => {
        this.router.navigate(['/dashboard'])
        this.isLoading = false;
      },
      err => { 
        console.log(err) 
        }
      )
    }
    this.form.reset()
    this.emailControlIsValid = true;
    this.passwordControlIsValid = true;

  }

}
