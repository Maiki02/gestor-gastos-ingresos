import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAVEGATION } from 'src/app/shared/const/navegation';
import { ResponseBackEnd } from 'src/app/shared/interfaces/response.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent implements OnInit {
  //------ LOGIN FORM ------\\
  public email:string='';
  public password:string='';

  //------ ERROR VARS ------\\
  isLoginInvalid:boolean=false;
  messageError:string='';

  //------ SOCIAL LOGIN ------\\
  user!: SocialUser;
  loggedIn: boolean=false;

  //------ IS IN REGISTER MODE ------\\
  isRegister:boolean=false;

  constructor(private authSvc:AuthService, private authSocialSvc:SocialAuthService, private router:Router){}

  ngOnInit(): void {
    this.loginGoogle();
  }

  //------ LOGIN FORM ------\\

  setUsername(value:string){
    this.email = value;
  } 

  setPassword(value:string){
    this.password = value;
  }

  loginWithSupabase(){
    if(this.email=='' || this.password==''){
      this.isLoginInvalid = true;
      this.messageError = 'El email y la contraseña son obligatorios';
    } else {
      this.loginSubscription();
    }
  }

  loginSubscription(){
    this.authSvc.login(this.email, this.password).then((response)=>{

      console.log(response);
      if(response.error?.status==400){
        this.messageError = response.error.message;
        this.isLoginInvalid = true;
      } else if(response.data.session?.access_token){
        this.authSvc.loginAndGetToken(response.data.session.access_token).subscribe((response:ResponseBackEnd)=>{
          console.log(response);
          if(response.status.code==200){
            this.router.navigate(['/'+NAVEGATION.home]);
          } else {
            this.messageError = response.status.message;
            this.isLoginInvalid = true;
          }
        });
      }

    }).catch((error)=>{
      console.log(error);
    });  
  }

  //------ SOCIAL LOGIN ------\\

  loginGoogle(){
    this.authSocialSvc.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
      this.loggedIn = (user != null);
      this.authSvc.loginGoogleAndGetToken(user.idToken).subscribe((response:ResponseBackEnd)=>{
        console.log(response);
        if(response.status.code==200){
          this.router.navigate(['/'+NAVEGATION.home]);
        } else {
          this.messageError = response.status.message;
        }
      });

    });
  }

  //------ REGISTER FORM ------\\
  public name:string='';
  public lastname:string='';
  public passwordConfirm:string='';
  public registerInvalid:boolean=false;


  setIsRegister(value:boolean){
    this.isRegister = value;
    this.email='';
    this.password='';
  }

  setName(value:string){
    this.name = value;
  }

  setLastname(value:string){
    this.lastname = value;
  }

  setPasswordConfirm(value:string){
    this.passwordConfirm = value;
  }

  registerWithSupabase(){
    if(this.email=='' || this.password=='' || this.name=='' || this.lastname=='' || this.passwordConfirm==''){
      this.registerInvalid = true;
      this.messageError = 'Todos los campos son obligatorios';
    } else {
      this.registerSubscription();
    }
  }

  registerSubscription(){
    this.authSvc.register(this.email, this.password).then((response)=>{

      console.log(response);
      if(response.error?.status==400){
        this.messageError = response.error.message;
        this.registerInvalid = true;
      } else {
        this.authSvc.registerAndGetToken({name:this.name, lastname:this.lastname, email:this.email}).subscribe((response:ResponseBackEnd)=>{
          console.log(response);
          if(response.status.code==200){
            this.router.navigate(['/'+NAVEGATION.home]);
          } else {
            this.messageError = response.status.message;
          }
        });
      }

    }).catch((error)=>{
      console.log(error);
    });  
  }

  isInvalidPasswordConfirm():boolean{
    return (this.passwordConfirm.length>0 && this.password!=this.passwordConfirm)
  }
  
  //------ FORGOT PASSWORD ------\\

  rememberPassword(){

  }
}