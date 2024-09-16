import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  
  dayNumber: string = '';
  cityArray: string [] = ['Pune', 'Mumbai', 'Gandhinagar', 'Nadiyad', 'Vadodara'];

  studentList: any[] = [
    {studId: 10, name:'AAA', city: 'Ahemdabad', isActive: false},
    {studId: 20, name:'BBB', city: 'Vadodara', isActive: false},
    {studId: 36, name:'CCC', city: 'Nadiyad', isActive: true},
    {studId: 72, name:'DDD', city: 'Modasa', isActive: false},
    {studId: 24, name:'EEE', city: 'Pune', isActive: false},
  ]
}
