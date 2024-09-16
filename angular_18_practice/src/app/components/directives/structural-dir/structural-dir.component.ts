import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visiable: boolean = false;
  isDiv2Visiable: boolean = false;

  num1: string = '';
  num2: string = '';
  isActive: boolean = false;
  selectedState: string = '';

  // dependency injection
  constructor(private router: Router){

  } 

  cityArray: string [] = ['Pune', 'Mumbai', 'Gandhinagar', 'Nadiyad', 'Vadodara'];

  studentList: any[] = [
    {studId: 10, name:'AAA', city: 'Ahemdabad', isActive: false},
    {studId: 20, name:'BBB', city: 'Vadodara', isActive: false},
    {studId: 36, name:'CCC', city: 'Nadiyad', isActive: true},
    {studId: 72, name:'DDD', city: 'Modasa', isActive: false},
    {studId: 24, name:'EEE', city: 'Pune', isActive: false},
  ]
  showDiv1(){
    this.isDiv1Visiable = true;
  }
  hideDiv1(){
    this.isDiv1Visiable = false;
  }

  toggleDiv2(){
    this.isDiv2Visiable = !this.isDiv2Visiable;
  }

  navigateToAttribute(){
    this.router.navigateByUrl("attributedirective")
  }
}
