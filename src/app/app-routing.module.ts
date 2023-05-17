import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './shared/guard/auth.guard';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path:"login", component: LoginComponent},
    {path:"app", component: LayoutComponent, canActivate:[authGuard], children: [
        {path:"interview", loadChildren: () => import('./interview/interview.module').then(m => m.InterviewModule)},
        {path:"on-boarding", loadChildren: () => import('./on-boarding/on-boarding.module').then(m => m.OnBoardingModule)},
        {path:"recruiting", loadChildren: () => import('./recruiting/recruiting.module').then(m => m.RecruitingModule)}
    ]},
    {path:"**", component: AccessForbiddenComponent}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
