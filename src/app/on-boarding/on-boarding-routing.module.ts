import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnBoardingLayoutComponent } from './on-boarding-layout/on-boarding-layout.component';


const routes: Routes = [
    {
        path: "", component: OnBoardingLayoutComponent, children: [
            { path: "employee", loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
            {path:"employee-category", loadChildren: () => import('./employee-category/employee-category.module').then(m => m.EmployeeCategoryModule)},
            {path:"employee-role", loadChildren: () => import('./employee-role/employee-role.module').then(m => m.EmployeeRoleModule)},
            {path:"employee-status", loadChildren: () => import('./employee-status/employee-status.module').then(m => m.EmployeeStatusModule)},
            
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnBoardingRoutingModule { }
