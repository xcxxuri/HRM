import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoleRoutingModule } from './employee-role-routing.module';
import { AddEmployeeRoleComponent } from './add-employee-role/add-employee-role.component';
import { ListEmployeeRoleComponent } from './list-employee-role/list-employee-role.component';
import { UpdateEmployeeRoleComponent } from './update-employee-role/update-employee-role.component';
import { DeleteEmployeeRoleComponent } from './delete-employee-role/delete-employee-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetEmployeeRoleComponent } from './get-employee-role/get-employee-role.component';


@NgModule({
  declarations: [
    AddEmployeeRoleComponent,
    ListEmployeeRoleComponent,
    UpdateEmployeeRoleComponent,
    DeleteEmployeeRoleComponent,
    GetEmployeeRoleComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class EmployeeRoleModule { }
