import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  loading = true;
  constructor(private _snackbar : MatSnackBar,private _router:Router) { }
  registerObj : registerModel = new registerModel();
  loginObj : loginModel = new loginModel();
  ngOnInit(): void {
  }

  isRegistering: boolean = false;

  toggleForm() {
    this.isRegistering = !this.isRegistering;
  }

  registerForm(){
    // debugger;
    const localuser = localStorage.getItem('loggeduser')
    if(localuser != null)
    {
      const user = JSON.parse(localuser);
      user.push(this.registerObj);
      localStorage.setItem('loggeduser',JSON.stringify(user))
    }
    else{
      const user = [] ;
      user.push(this.registerObj);
      localStorage.setItem('loggeduser',JSON.stringify(user));
    }
    this._snackbar.open('User Registered Successfully :','Close')
  }

  loginForm() {
    //We Get the User from The Database ..
    const localusers = localStorage.getItem('loggeduser');
    if(localusers != null)
    {
      const user = JSON.parse(localusers);
      const isUserExist = user.find((user:registerModel)=> user.email === this.loginObj.email && user.password === this.loginObj.password)
      if(isUserExist != undefined)
      {
        this._snackbar.open('Login Successfull:','Close');
        localStorage.setItem('Iuser',JSON.stringify(isUserExist))
        this._router.navigate(['/dashboard']);
      }
    }
    else{
      this._snackbar.open('Invalid Credentials:','Close')
    }
  }

}

export class registerModel {
  name:string;
  email:string;
  password:string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }
}



export class loginModel {
  email:string;
  password:string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}