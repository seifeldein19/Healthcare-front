import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error:string = '' ; 

  registerform: FormGroup = new FormGroup({

    first_name : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email : new FormControl(null,[Validators.required,Validators.email]),
    age : new FormControl(null,[Validators.required,Validators.min(18),Validators.max(70)]),
    password : new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z]{2,8}$')]),
    national_number : new FormControl(null,[Validators.required,Validators.maxLength(14)]),
    location : new FormControl(null,[Validators.required]),
  
  });
  constructor(public _AuthService:AuthService,public _Router:Router) { }

  ngOnInit(): void {
  }
  
  submitRegisterForm(registerform : FormGroup ){
   
   console.log(registerform.value);

   if (registerform.valid){
     this._AuthService.register(registerform.value).subscribe((Response)=>{
 
      if(Response.message == 'success')
      {
        this._Router.navigate(['login'])

      }
      else
      {
        this.error = Response.message;
      }

     })
   }


  }

  

 

}
