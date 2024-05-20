import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogin:boolean = false;

  constructor(private _Authservice:AuthService) { }

  ngOnInit(): void {

   this._Authservice.userdata.subscribe(()=>{

    if(this._Authservice.userdata.getValue() != null)
    {
      this.islogin = true;
    }
    else
    {
      this.islogin = false;
    }
   })
    
  }

  logout()
  {
    this._Authservice.logout(); 
  }

}
