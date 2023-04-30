import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private fb:FormBuilder,private r:Router){}

  logform=this.fb.group({
    email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]],
    pswd:['',[Validators.required,Validators.pattern("[0-9a-zA-Z*&$@!]{4,}")]]
  })
 
  btnClick(){
    this.r.navigateByUrl("dashboard")
  }


}
