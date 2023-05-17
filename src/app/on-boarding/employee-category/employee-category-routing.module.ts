import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeCategoryComponent } from './add-employee-category/add-employee-category.component';
import { UpdateEmployeeCategoryComponent } from './update-employee-category/update-employee-category.component';
import { DeleteEmployeeCategoryComponent } from './delete-employee-category/delete-employee-category.component';
import { ListEmployeeCategoryComponent } from './list-employee-category/list-employee-category.component';
import { GetEmployeeCategoryComponent } from './get-employee-category/get-employee-category.component';

const routes: Routes = [
    {path:"add", component:AddEmployeeCategoryComponent},
    {path:"update", component:UpdateEmployeeCategoryComponent},
    {path:"delete", component: DeleteEmployeeCategoryComponent},
    {path:"list", component:ListEmployeeCategoryComponent},
    {path:"get", component:GetEmployeeCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeCategoryRoutingModule { }
