import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnBoardingRoutingModule } from './on-boarding-routing.module';
import { OnBoardingLayoutComponent } from './on-boarding-layout/on-boarding-layout.component';



@NgModule({
  declarations: [

  
    OnBoardingLayoutComponent
  ],
  imports: [
    CommonModule,
    OnBoardingRoutingModule
  ]
})
export class OnBoardingModule { }
