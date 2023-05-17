import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewTypeComponent } from './add-interview-type/add-interview-type.component';
import { DeleteInterviewTypeComponent } from './delete-interview-type/delete-interview-type.component';
import { UpdateInterviewTypeComponent } from './update-interview-type/update-interview-type.component';
import { ListInterviewTypeComponent } from './list-interview-type/list-interview-type.component';
import { GetInterviewTypeComponent } from './get-interview-type/get-interview-type.component';

const routes: Routes = [
    {path:"add", component:AddInterviewTypeComponent},
    {path:"delete", component:DeleteInterviewTypeComponent},
    {path:"update", component:UpdateInterviewTypeComponent},
    {path:"list", component:ListInterviewTypeComponent},
    {path:"get", component:GetInterviewTypeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewTypeRoutingModule { }
