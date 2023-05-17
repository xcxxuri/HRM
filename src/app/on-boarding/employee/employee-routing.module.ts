import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';

const routes: Routes = [

    { path: "add", component: AddEmployeeComponent },
    { path: "list", component: ListEmployeeComponent },
    { path: "update", component: UpdateEmployeeComponent },
    { path: "delete", component: DeleteEmployeeComponent },
    {path:"get", component: GetEmployeeComponent}


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
