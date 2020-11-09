import { Component, OnInit } from '@angular/core';
import {
  SocialUser,
  SocialAuthService,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: SocialUser;

  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      if (user == null) {
        this.router.navigate(['shop']);
      } else {
        this.router.navigate(['products']);
      }
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  userLogged(user: SocialUser): any {
    if (user == null) {
      this.router.navigate(['shop']);
    } else {
      this.router.navigate(['products']);
    }
  }
}
