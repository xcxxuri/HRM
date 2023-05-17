import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewerComponent } from './add-interviewer/add-interviewer.component';
import { UpdateInterviewerComponent } from './update-interviewer/update-interviewer.component';
import { DeleteInterviewerComponent } from './delete-interviewer/delete-interviewer.component';
import { ListInterviewerComponent } from './list-interviewer/list-interviewer.component';
import { GetInterviewerComponent } from './get-interviewer/get-interviewer.component';

const routes: Routes = [
    { path: "add", component: AddInterviewerComponent },
    { path: "list", component: ListInterviewerComponent },
    { path: "delete", component: DeleteInterviewerComponent },
    { path: "update", component: UpdateInterviewerComponent },
    { path: "get", component: GetInterviewerComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterviewerRoutingModule { }
