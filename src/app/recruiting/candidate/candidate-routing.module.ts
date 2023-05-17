import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { GetCandidateComponent } from './get-candidate/get-candidate.component';


const routes: Routes = [
    {path:"add", component:AddCandidateComponent},
    {path:"update", component:UpdateCandidateComponent},
    {path:"delete", component: DeleteCandidateComponent},
    {path:"list", component:ListCandidateComponent},
    {path:"get", component:GetCandidateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
