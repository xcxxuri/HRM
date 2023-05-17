import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubmissionComponent } from './add-submission/add-submission.component';
import { UpdateSubmissionComponent } from './update-submission/update-submission.component';
import { DeleteSubmissionComponent } from './delete-submission/delete-submission.component';
import { ListSubmissionComponent } from './list-submission/list-submission.component';
import { GetSubmissionComponent } from './get-submission/get-submission.component';


const routes: Routes = [
    { path: "add", component: AddSubmissionComponent },
    { path: "update", component: UpdateSubmissionComponent },
    { path: "delete", component: DeleteSubmissionComponent },
    { path: "list", component: ListSubmissionComponent },
    { path: "get", component: GetSubmissionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubmissionRoutingModule { }
