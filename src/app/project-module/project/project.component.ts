import { Component, OnInit } from '@angular/core';
import { Project } from '../project-class';
import { ProjectService } from '../project-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

   Projects:Project[];
   NewProject:Project = new Project();
   message:string;
   toggleTemplate:boolean = false;
   updateProject:Project = new Project();
   formIndex:number;
   click = false;
   constructor(private projectService:ProjectService) { }

  ngOnInit(): void {

    this.projectService.getAllProjects().subscribe(

      (response:Project[]) => {
        this.Projects = response;
      }
    )
    

  }


  
  onSaveClick()
  {
    this.click = true;
    this.projectService.createProject(this.NewProject).subscribe(
       (response:Project) => {
         
        this.click = false;
        this.Projects.unshift(response);
        this.NewProject.teamSize = null;
        this.NewProject.projectName = null;
        this.NewProject.dateOfBirth = null;
     
       }, 
       (error) => {
        this.click = false;
          console.log(error)
       }
       

      


       );
  }

  Edit($event,i)
  {

       this.formIndex = i;
       this.toggleTemplate = true;
       this.updateProject.id = $event.target.id
       this.updateProject.projectName = this.Projects[i].projectName
       this.updateProject.dateOfBirth = this.Projects[i].dateOfBirth
      this.updateProject.teamSize = this.Projects[i].teamSize
       
  }


  CancelEdit()
  {
    this.toggleTemplate = false;
  }

  update(formIndex)
  {

       
        this.projectService.update(this.updateProject).subscribe(
        (response:Project) => {

              this.toggleTemplate = false;
              this.Projects[formIndex].dateOfBirth = response.dateOfBirth;
              this.Projects[formIndex].projectName = response.projectName;
              this.Projects[formIndex].teamSize = response.teamSize;
          },

            (error) => {

                console.log(error)

            }



        )


  }


  Delete($event,i)
  {
      
     this.projectService.deleteProject($event.target.id).subscribe(
       (response:Project) => {
           
         this.Projects.splice(i,1);
         console.log(response)

       }, 
       
       (error) => {
          console.log(error)
       }
       
       );
  }




}
