import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup ,Validators } from '@angular/forms';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  error:string = '';
  requestForm:FormGroup = new FormGroup({
    name: new FormControl(null , Validators.required),
    hosbital_name: new FormControl(null , Validators.required),
    phone: new FormControl(null , Validators.required),
    address: new FormControl(null , Validators.required),
    national_id: new FormControl(null , Validators.required),
    age: new FormControl(null , Validators.required),
    speciality: new FormControl(null , Validators.required),
    description: new FormControl(null , Validators.required)
    
  })

  submitRequest(requestForm:FormGroup)
  {
    if (requestForm.valid)
    {
      this._requestService.requester(requestForm.value).subscribe((response)=>{
 
        if(response.message == 'success')
        {
          this._Router.navigate(['hospitals'])

        }
       
    })

  }

}


  constructor(private _Router:Router , public _requestService:RequestService) { }
 
  resevedata()
  {
    window.alert('success')
    this._Router.navigate(['hospitals'])
  }
  ngOnInit(): void {
  }

}
