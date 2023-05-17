import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionRoutingModule } from './submission-routing.module';
import { AddSubmissionComponent } from './add-submission/add-submission.component';
import { ListSubmissionComponent } from './list-submission/list-submission.component';
import { DeleteSubmissionComponent } from './delete-submission/delete-submission.component';
import { UpdateSubmissionComponent } from './update-submission/update-submission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetSubmissionComponent } from './get-submission/get-submission.component';


@NgModule({
  declarations: [
    AddSubmissionComponent,
    ListSubmissionComponent,
    DeleteSubmissionComponent,
    UpdateSubmissionComponent,
    GetSubmissionComponent
  ],
  imports: [
    CommonModule,
    SubmissionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SubmissionModule { }
