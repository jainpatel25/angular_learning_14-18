import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { StructuralDirComponent } from "./components/directives/structural-dir/structural-dir.component";
import { AttributeDirComponent } from "./components/directives/attribute-dir/attribute-dir.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddEmployeeComponent, EmployeeListComponent, DataBindingComponent, StructuralDirComponent, AttributeDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_practice';
}
