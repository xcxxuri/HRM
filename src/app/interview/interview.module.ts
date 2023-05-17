import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewLayoutComponent } from './interview-layout/interview-layout.component';



@NgModule({
  declarations: [

  
    InterviewLayoutComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule
  ]
})
export class InterviewModule { }
