import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeRoleComponent } from './add-employee-role/add-employee-role.component';
import { UpdateEmployeeRoleComponent } from './update-employee-role/update-employee-role.component';
import { DeleteEmployeeRoleComponent } from './delete-employee-role/delete-employee-role.component';
import { ListEmployeeRoleComponent } from './list-employee-role/list-employee-role.component';
import { GetEmployeeRoleComponent } from './get-employee-role/get-employee-role.component';


const routes: Routes = [
    {path:"add", component:AddEmployeeRoleComponent},
    {path:"update", component:UpdateEmployeeRoleComponent},
    {path:"delete", component: DeleteEmployeeRoleComponent},
    {path:"list", component:ListEmployeeRoleComponent},
    {path:"get", component:GetEmployeeRoleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoleRoutingModule { }
