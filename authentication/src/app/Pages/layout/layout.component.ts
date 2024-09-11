import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

 
  loggedUser: any ;

  constructor(private router:Router) { 
    const localuser = localStorage.getItem('Iuser');
    // console.log('user is basically: ',localuser)
    if(localuser != null){
      this.loggedUser = JSON.parse(localuser);
      console.log('user:',this.loggedUser)
    }
  }
  

  onLogout() {
    localStorage.removeItem('Iuser');
    this.router.navigate(['/login']);
  }
  

  ngOnInit(): void {
  }

}
