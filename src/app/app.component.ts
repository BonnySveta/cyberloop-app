import { Component } from '@angular/core';
import {AuthService} from 'src/app/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'cyberloop-app';
  constructor(public authService: AuthService) {}
  logout() {
    this.authService.signOut();
  }
}
