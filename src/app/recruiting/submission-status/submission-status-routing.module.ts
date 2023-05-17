import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubmissionStatusComponent } from './add-submission-status/add-submission-status.component';
import { UpdateSubmissionStatusComponent } from './update-submission-status/update-submission-status.component';
import { DeleteSubmissionStatusComponent } from './delete-submission-status/delete-submission-status.component';
import { ListSubmissionStatusComponent } from './list-submission-status/list-submission-status.component';
import { GetSubmissionStatusComponent } from './get-submission-status/get-submission-status.component';


const routes: Routes = [
    { path: "add", component: AddSubmissionStatusComponent },
    { path: "update", component: UpdateSubmissionStatusComponent },
    { path: "delete", component: DeleteSubmissionStatusComponent },
    { path: "list", component: ListSubmissionStatusComponent },
    { path: "get", component: GetSubmissionStatusComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubmissionStatusRoutingModule { }
