import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecruiterComponent } from './add-recruiter/add-recruiter.component';
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component';
import { UpdateRecruiterComponent } from './update-recruiter/update-recruiter.component';
import { DeleteRecruiterComponent } from './delete-recruiter/delete-recruiter.component';
import { GetRecruiterComponent } from './get-recruiter/get-recruiter.component';

const routes: Routes = [
    {path:"add",component:AddRecruiterComponent},
    {path:"list",component:ListRecruiterComponent},
    {path:"update",component:UpdateRecruiterComponent},
    {path:"delete",component:DeleteRecruiterComponent},
    {path:"get", component:GetRecruiterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
