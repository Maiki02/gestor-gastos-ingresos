import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {
  public username:string='';
  public password:string='';

  user!: SocialUser;
  loggedIn: boolean=false;

  constructor(private authSvc:AuthService, private authSocialSvc:SocialAuthService){}

  ngOnInit(): void {
    this.authSocialSvc.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
      this.loggedIn = (user != null);
    });
  
  }

  setUsername(value:string){
    this.username = value;
  } 

  setPassword(value:string){
    this.password = value;
  }
  rememberPassword(){

  }

  register(){
    console.log('Login');
  }

}
