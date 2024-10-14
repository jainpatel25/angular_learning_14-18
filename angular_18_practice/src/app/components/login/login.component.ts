import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: any = {
    EmailId: '',
    Password: ''
  };
  router = inject(Router);
  http = inject(HttpClient);

  onLogin(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userObj).subscribe((res:any)=>{
      if(res.result){
        alert("Login Success");
        localStorage.setItem('loginUser', this.userObj.userName)
        this.router.navigateByUrl('add-emp')
      } else {
        alert(res.message)
      }
    })
    // if(this.userObj.userName == 'admin' && this.userObj.password == "1234"){
    //   alert("Login Success");
    //   localStorage.setItem('loginUser', this.userObj.userName)
    //   this.router.navigateByUrl('add-emp')
    // } else {
    //   alert(" Wrong Credentials")
    // }
  }
}
