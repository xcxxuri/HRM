import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewTypeRoutingModule } from './interview-type-routing.module';
import { AddInterviewTypeComponent } from './add-interview-type/add-interview-type.component';
import { ListInterviewTypeComponent } from './list-interview-type/list-interview-type.component';
import { DeleteInterviewTypeComponent } from './delete-interview-type/delete-interview-type.component';
import { UpdateInterviewTypeComponent } from './update-interview-type/update-interview-type.component';
import { GetInterviewTypeComponent } from './get-interview-type/get-interview-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddInterviewTypeComponent,
    ListInterviewTypeComponent,
    DeleteInterviewTypeComponent,
    UpdateInterviewTypeComponent,
    GetInterviewTypeComponent
  ],
  imports: [
    CommonModule,
    InterviewTypeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class InterviewTypeModule { }
