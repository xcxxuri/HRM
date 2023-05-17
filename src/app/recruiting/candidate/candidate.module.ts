import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetCandidateComponent } from './get-candidate/get-candidate.component';


@NgModule({
  declarations: [
    AddCandidateComponent,
    ListCandidateComponent,
    UpdateCandidateComponent,
    DeleteCandidateComponent,
    GetCandidateComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CandidateModule { }
