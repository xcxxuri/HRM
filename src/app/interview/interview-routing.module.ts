import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewLayoutComponent } from './interview-layout/interview-layout.component';


const routes: Routes = [
    {
        path: "", component: InterviewLayoutComponent, children: [
            { path: "interviewer", loadChildren: () => import('./interviewer/interviewer.module').then(m => m.InterviewerModule) },
            { path: "interviews", loadChildren: () => import('./interviews/interviews.module').then(m => m.InterviewsModule) },
            {path:"interview-type", loadChildren: () => import('./interview-type/interview-type.module').then(m => m.InterviewTypeModule)},
            {path:"recruiter", loadChildren: () => import('./recruiter/recruiter.module').then(m => m.RecruiterModule)},
            {path:"interview-feedback", loadChildren: () => import('./interview-feedback/interview-feedback.module').then(m => m.InterviewFeedbackModule)},
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterviewRoutingModule { }
