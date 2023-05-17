import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewsComponent } from './add-interviews/add-interviews.component';
import { ListInterviewsComponent } from './list-interviews/list-interviews.component';
import { DeleteInterviewsComponent } from './delete-interviews/delete-interviews.component';
import { UpdateInterviewsComponent } from './update-interviews/update-interviews.component';
import { GetInterviewsComponent } from './get-interviews/get-interviews.component';

const routes: Routes = [
    {path:"add", component: AddInterviewsComponent},
    {path:"list", component:ListInterviewsComponent},
    {path:"update", component:UpdateInterviewsComponent},
    {path:"delete", component:DeleteInterviewsComponent},
    {path:"get", component:GetInterviewsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewsRoutingModule { }
