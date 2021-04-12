import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin-module/dashboard/dashboard.component';
import { AboutComponent } from './admin-module/about/about.component';
import { ProjectComponent } from './project-module/project/project.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"about", component:AboutComponent},
  {path:"project",component:ProjectComponent},
  {path:"", redirectTo:"dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
