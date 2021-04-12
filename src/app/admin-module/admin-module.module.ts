import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../admin-module/dashboard/dashboard.component';
import { AboutComponent } from '../admin-module/about/about.component';
import { DashboardService } from './services/dashboard.service';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent
  ],
  imports: [CommonModule ],
  exports:[DashboardComponent,AboutComponent],
  providers:[DashboardService]
})
export class AdminModuleModule { }
