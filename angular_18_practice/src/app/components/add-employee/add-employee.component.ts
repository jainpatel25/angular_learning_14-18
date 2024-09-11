import { Component } from '@angular/core';
import { EmployeeListComponent } from "../employee-list/employee-list.component";

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [EmployeeListComponent],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

}
