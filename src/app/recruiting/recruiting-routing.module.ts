import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitingLayoutComponent } from './recruiting-layout/recruiting-layout.component';


const routes: Routes = [
    {
        path:"", component:RecruitingLayoutComponent, children:[
            {path:"job-requirement", loadChildren: () => import('./job-requirement/job-requirement.module').then(m => m.JobRequirementModule)},
            {path:"candidate", loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule)},
            {path:"submission", loadChildren: () => import('./submission/submission.module').then(m => m.SubmissionModule)},
            {path:"submission-status", loadChildren: () => import('./submission-status/submission-status.module').then(m => m.SubmissionStatusModule)},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitingRoutingModule { }
