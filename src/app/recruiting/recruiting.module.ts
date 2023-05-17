import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitingRoutingModule } from './recruiting-routing.module';

import { RecruitingLayoutComponent } from './recruiting-layout/recruiting-layout.component';


@NgModule({
  declarations: [
 
    RecruitingLayoutComponent
  ],
  imports: [
    CommonModule,
    RecruitingRoutingModule
  ]
})
export class RecruitingModule { }
