import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isNewUser = true;
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  resetPassword = false;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() { }

  checkUserInfo() {
    if (this.authService.isUserEmailLoggedIn) {
     // this.router.navigate(['/home'])
    }
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  onSignIn(): void {
    this.clearErrorMessage()

    if (this.validateForm(this.email, this.password)) {
      this.authService.signIn(this.email, this.password)
        .then(() => console.log('Hi'))
        .catch(_error => {
          this.error = _error
        })
    }
  }

  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Please enter Email!'
      return false
    }

    if (password.length === 0) {
      this.errorMessage = 'Please enter Password!'
      return false
    }

    this.errorMessage = ''

    return true
  }


}



 