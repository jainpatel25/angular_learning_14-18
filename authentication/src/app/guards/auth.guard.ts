import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _snackbar : MatSnackBar,private router : Router) {
  }
  canActivate():any {
    const isLoggedin = this.checkLoginStatus;
    if(!isLoggedin)
    {
      this.router.navigate(['/']);
      this._snackbar.open('invalid Credentials...','Close');
    }
    else{
      this.router.navigate(['layout'])
    }
  }
 
  
  private checkLoginStatus(): any {
    const loggedUser = localStorage.getItem('Iuser');
    return loggedUser;
  }
}
