import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewerRoutingModule } from './interviewer-routing.module';
import { DeleteInterviewerComponent } from './delete-interviewer/delete-interviewer.component';
import { ListInterviewerComponent } from './list-interviewer/list-interviewer.component';
import { UpdateInterviewerComponent } from './update-interviewer/update-interviewer.component';
import { AddInterviewerComponent } from './add-interviewer/add-interviewer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetInterviewerComponent } from './get-interviewer/get-interviewer.component';




@NgModule({
  declarations: [
    DeleteInterviewerComponent,
    ListInterviewerComponent,
    UpdateInterviewerComponent,
    AddInterviewerComponent,
    GetInterviewerComponent,
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class InterviewerModule { }
