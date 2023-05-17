import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewFeedbackComponent } from './add-interview-feedback/add-interview-feedback.component';
import { ListInterviewFeedbackComponent } from './list-interview-feedback/list-interview-feedback.component';
import { UpdateInterviewFeedbackComponent } from './update-interview-feedback/update-interview-feedback.component';
import { DeleteInterviewFeedbackComponent } from './delete-interview-feedback/delete-interview-feedback.component';
import { GetInterviewFeedbackComponent } from './get-interview-feedback/get-interview-feedback.component';

const routes: Routes = [
    {path:"add", component: AddInterviewFeedbackComponent},
    {path:"list", component:ListInterviewFeedbackComponent},
    {path:"update", component:UpdateInterviewFeedbackComponent},
    {path:"delete", component:DeleteInterviewFeedbackComponent},
    {path:"get", component:GetInterviewFeedbackComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewFeedbackRoutingModule { }
