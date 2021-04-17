import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project-class';
import { ProjectDetailService } from './project-detail-service.service';


@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

  project:Project = new Project();
  constructor(private route: ActivatedRoute, private routeToPage:Router, private projectDetailService:ProjectDetailService) { }

  ngOnInit(): void {
     let id:any = this.route.snapshot.paramMap.get("id");
    this.projectDetailService.getDetailProject(id).subscribe((data:Project)=>{ this.project = data },(error)=>{
      console.log(error)
    })
    

  }



  goToProject()
  {
      this.routeToPage.navigateByUrl('/project');
  }

}
