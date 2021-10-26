import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  

  get isUserEmailLoggedIn(): boolean {
    if (this.authState !== null) {
      return true
    } else {
      return false
    }
  }

  signIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        console.log('user' , user);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  signOut(): void {
    console.log('sign Out');
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
}