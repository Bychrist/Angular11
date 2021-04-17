import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../project-module/project-class';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectService{


  
  constructor(private httpClient:HttpClient) 
  {}



  getAllProjects():Observable<Project[]>
  {
     return this.httpClient.get<Project[]>('https://localhost:44348/api/project',{responseType:"json"}).pipe(map(
       (data:Project[]) => {
         for (let index = 0; index < data.length; index++) {
          data[index].teamSize  = data[index].teamSize * 1;
           
         }
         return data
       }
     ))
  }

  createProject(Project:Project):Observable<Project>
  {
    return this.httpClient.post<Project>("https://localhost:44348/api/project",Project).pipe(map(
      (data:Project) => {

         data.teamSize = data.teamSize * 0.25
         return data
      }

    
    ))
  }


  update(updateProject:Project):Observable<Project>
  {
       console.log(updateProject)
      return this.httpClient.put<Project>(`https://localhost:44348/api/project/${updateProject.id}`, updateProject,{responseType:"json"});
  }


  deleteProject(id:number):Observable<any>
  {
       return this.httpClient.delete<any>(`https://localhost:44348/api/project/${id}`,{responseType:"json"});
  }




}
