import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewsRoutingModule } from './interviews-routing.module';
import { AddInterviewsComponent } from './add-interviews/add-interviews.component';
import { ListInterviewsComponent } from './list-interviews/list-interviews.component';
import { DeleteInterviewsComponent } from './delete-interviews/delete-interviews.component';
import { UpdateInterviewsComponent } from './update-interviews/update-interviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetInterviewsComponent } from './get-interviews/get-interviews.component';


@NgModule({
  declarations: [
    AddInterviewsComponent,
    ListInterviewsComponent,
    DeleteInterviewsComponent,
    UpdateInterviewsComponent,
    GetInterviewsComponent,
  ],
  imports: [
    CommonModule,
    InterviewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class InterviewsModule { }
