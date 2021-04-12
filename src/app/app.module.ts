import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { ProjectModule } from './project-module/project-module.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    AdminModuleModule,
    ProjectModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
