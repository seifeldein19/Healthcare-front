import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _AuthService:AuthService,public _Router:Router) { }

  error:string = '' ; 

 loginform: FormGroup = new FormGroup({

   
    email : new FormControl(null,[Validators.required,Validators.email]),
   
    password : new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z]{2,8}$')]),
    
  
  });

  submitloginForm(loginform : FormGroup ){
   
    console.log(loginform.value);
 
    if (loginform.valid){
      this._AuthService.login(loginform.value).subscribe((Response)=>{
  
       if(Response.message == 'login success')
       {

        localStorage.setItem('usertoken',Response.token)
        this._AuthService.saveUserData();
         this._Router.navigate(['home'])
 
       }
       else
       {
         this.error = Response.message;
       }
 
      })
    }
 
 
   }
  signupdata()
  {
    this._Router.navigate(['register'])
  }
  ngOnInit(): void {
  }

}
