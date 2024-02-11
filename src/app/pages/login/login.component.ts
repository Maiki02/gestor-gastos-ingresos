import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent {
  public username:string='';
  public password:string='';

  constructor(){}

  setUsername(value:string){
    this.username = value;
  } 

  setPassword(value:string){
    this.password = value;
  }

  loginWithGoogle(){
    console.log('Login with Google');
  }

  rememberPassword(){

  }

  register(){
    console.log('Login');
  }

}
