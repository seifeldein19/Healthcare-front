import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login-hospitals.service';

@Component({
  selector: 'app-login-hospital',
  templateUrl: './login-hospital.component.html',
  styleUrls: ['./login-hospital.component.css']
})
export class LoginHospitalComponent implements OnInit {

  first_name:any;
  constructor(public _AuthService:AuthService,public _Router:Router) {

    this.first_name = localStorage.getItem('first_name')
   }

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

        localStorage.setItem('hospitaltoken',Response.token)
        this._AuthService.saveUserData();
         this._Router.navigate(['dashboard/'+this.first_name])

       }
       else
       {
         this.error = Response.message;
       }

      })
    }


   }

  ngOnInit(): void {
  }

}

