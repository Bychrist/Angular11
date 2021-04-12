import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

 // constructor() { }
  getTeamMemberSummary():any[]
  {
    var myMembers = [
      {Region:"West", Name:"James"},
      {Region:"North", Name:"Lanre"},
      {Region:"North", Name:"Sule"},
    ]

    return myMembers;
  }



}
