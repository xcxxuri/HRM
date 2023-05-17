import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRequirementRoutingModule } from './job-requirement-routing.module';
import { AddJobRequirementComponent } from './add-job-requirement/add-job-requirement.component';
import { DeleteJobRequirementComponent } from './delete-job-requirement/delete-job-requirement.component';
import { ListJobRequirementComponent } from './list-job-requirement/list-job-requirement.component';
import { UpdateJobRequirementComponent } from './update-job-requirement/update-job-requirement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetJobRequirementComponent } from './get-job-requirement/get-job-requirement.component';


@NgModule({
  declarations: [
    AddJobRequirementComponent,
    DeleteJobRequirementComponent,
    ListJobRequirementComponent,
    UpdateJobRequirementComponent,
    GetJobRequirementComponent
  ],
  imports: [
    CommonModule,
    JobRequirementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class JobRequirementModule { }
