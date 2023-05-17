import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeStatusRoutingModule } from './employee-status-routing.module';
import { AddEmployeeStatusComponent } from './add-employee-status/add-employee-status.component';
import { ListEmployeeStatusComponent } from './list-employee-status/list-employee-status.component';
import { UpdateEmployeeStatusComponent } from './update-employee-status/update-employee-status.component';
import { DeleteEmployeeStatusComponent } from './delete-employee-status/delete-employee-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetEmployeeStatusComponent } from './get-employee-status/get-employee-status.component';


@NgModule({
  declarations: [
    AddEmployeeStatusComponent,
    ListEmployeeStatusComponent,
    UpdateEmployeeStatusComponent,
    DeleteEmployeeStatusComponent,
    GetEmployeeStatusComponent
  ],
  imports: [
    CommonModule,
    EmployeeStatusRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EmployeeStatusModule { }
