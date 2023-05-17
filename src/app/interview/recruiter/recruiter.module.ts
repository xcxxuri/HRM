import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { AddRecruiterComponent } from './add-recruiter/add-recruiter.component';
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component';
import { DeleteRecruiterComponent } from './delete-recruiter/delete-recruiter.component';
import { UpdateRecruiterComponent } from './update-recruiter/update-recruiter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetRecruiterComponent } from './get-recruiter/get-recruiter.component';


@NgModule({
  declarations: [
    AddRecruiterComponent,
    ListRecruiterComponent,
    DeleteRecruiterComponent,
    UpdateRecruiterComponent,
    GetRecruiterComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RecruiterModule { }
