import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    GetEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EmployeeModule { }
