import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionStatusRoutingModule } from './submission-status-routing.module';
import { AddSubmissionStatusComponent } from './add-submission-status/add-submission-status.component';
import { ListSubmissionStatusComponent } from './list-submission-status/list-submission-status.component';
import { DeleteSubmissionStatusComponent } from './delete-submission-status/delete-submission-status.component';
import { UpdateSubmissionStatusComponent } from './update-submission-status/update-submission-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetSubmissionStatusComponent } from './get-submission-status/get-submission-status.component';


@NgModule({
  declarations: [

    AddSubmissionStatusComponent,
    ListSubmissionStatusComponent,
    DeleteSubmissionStatusComponent,
    UpdateSubmissionStatusComponent,
    GetSubmissionStatusComponent
  ],
  imports: [
    CommonModule,
    SubmissionStatusRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SubmissionStatusModule { }
