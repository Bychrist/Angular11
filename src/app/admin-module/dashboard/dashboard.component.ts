import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }

  Designation:string;
  Username:string;
  NoOfTeamMembers:number;
  Clients: string[];
  teamMemberSummary = [];
  count:number;
  changeClass = true;
  template = 1;
  fromServiceTeam:any[];
  ngOnInit(): void {


    //========== from the service===================
    this.fromServiceTeam = this.dashboardService.getTeamMemberSummary();

    this.Designation = "James Wilson";
    this.Username = "j.wilson";
    this.NoOfTeamMembers = 6;
    this.count = 1;
    this.Clients = [
      "Gabriel Nzete","Dickson Nzete","Raymond Nzete", "Angela Nzete"
    ]


    this.teamMemberSummary = [
      {CompanyName:"Agro Production Limited", Sector:"Agriculture"},
      {CompanyName:"Tech Cabal  Limited", Sector:"Fintech"},
      {CompanyName:"Laplass Education", Sector:"Education"},
      {CompanyName:"Golden Cross Medicals", Sector:"Agriculture"}
    ]
  }

//event 

team($event)
{
  console.log($event.target.innerHTML)
}





}
