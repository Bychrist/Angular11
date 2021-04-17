import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../project-class';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UpperCasePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {

  constructor(private httpClient:HttpClient) { }



  getDetailProject(id:number):Observable<Project>
  {

     return this.httpClient.get(`https://localhost:44348/api/project/${id}`, {responseType:"json"}).pipe(map(
       (data:Project) => {

        
           return data;
       }
     ))
    
  }

}
