import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { FormsModule }   from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
  CommonModule,
  ReactiveFormsModule,
  FormsModule

  ]
})
export class ProjectModule { }