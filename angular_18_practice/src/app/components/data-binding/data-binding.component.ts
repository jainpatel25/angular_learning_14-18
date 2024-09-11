import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string, number, boolean, date

  courseName: string = "Angular 18";
  stateName: string = "Gujrat";
  inputType = "checkbox";
  myClassName: string = "bg-primary";
  rollNo: number = 123;
  isIndian: boolean = false;
  currentDate: Date = new Date();

  firstName = signal("John Carter");
  constructor(){

  }

  showAlert(message: string){
    alert(message)
  }

  changeCourseName() {
    this.courseName = "React Js";
  }
}
