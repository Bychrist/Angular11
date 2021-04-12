import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../project-module/project-class';

@Injectable({
  providedIn: 'root'
})
export class ProjectService{


  
  constructor(private httpClient:HttpClient) 
  {}



  getAllProjects():Observable<Project[]>
  {
     return this.httpClient.get<Project[]>('https://localhost:44348/api/project');
  }

  createProject(Project:Project):Observable<Project>
  {
    return this.httpClient.post<Project>("https://localhost:44348/api/project",Project)
  }


  update(updateProject:Project):Observable<Project>
  {
   
      return this.httpClient.put<Project>(`https://localhost:44348/api/project/${updateProject.id}`, updateProject);
  }


  deleteProject(id:number):Observable<any>
  {
       return this.httpClient.delete<any>(`https://localhost:44348/api/project/${id}`);
  }




}
