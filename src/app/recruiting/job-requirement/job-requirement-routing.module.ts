import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobRequirementComponent } from './add-job-requirement/add-job-requirement.component';
import { UpdateJobRequirementComponent } from './update-job-requirement/update-job-requirement.component';
import { DeleteJobRequirementComponent } from './delete-job-requirement/delete-job-requirement.component';
import { ListJobRequirementComponent } from './list-job-requirement/list-job-requirement.component';
import { GetJobRequirementComponent } from './get-job-requirement/get-job-requirement.component';


const routes: Routes = [
    {path:"add", component:AddJobRequirementComponent},
    {path:"update", component:UpdateJobRequirementComponent},
    {path:"delete", component: DeleteJobRequirementComponent},
    {path:"list", component:ListJobRequirementComponent},
    {path:"get", component:GetJobRequirementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRequirementRoutingModule { }
