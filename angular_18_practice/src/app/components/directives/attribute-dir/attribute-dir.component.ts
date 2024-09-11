import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {
 
  div1BgColor: string = 'bg-primary';
  idDiv2Active : boolean = false;

  num1: string = '';
  num2: string = '';

  isActive : boolean = false;

  customStyle: any = {
    'color': 'red',
    'background-color': 'lightblue',
    'width': '200px',
    'height': '200px',
    'border-radious': '50%'
  };

  studentList: any[] = [
    {studId: 10, totalMarks: 55, gender: 'male', name:'AAA', city: 'Ahemdabad', isActive: false},
    {studId: 20, totalMarks: 80, gender: 'female', name:'BBB', city: 'Vadodara', isActive: false},
    {studId: 36, totalMarks: 40, gender: 'male', name:'CCC', city: 'Nadiyad', isActive: true},
    {studId: 72, totalMarks: 90, gender: 'female', name:'DDD', city: 'Modasa', isActive: false},
    {studId: 24, totalMarks: 75, gender: 'male', name:'EEE', city: 'Pune', isActive: false},
  ]

  addRedClass(){
    this.div1BgColor = "bg-danger"
  }

  addBlueClass(){
    this.div1BgColor = "bg-primary"
  }

  toggleDiv2Class(){
    this.idDiv2Active = !this.idDiv2Active;
  }
}
