import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import { League } from 'src/app/models/league';
import { Team } from 'src/app/models/team';
import { User } from 'src/app/models/user';
import { Match } from 'src/app/models/match';
import { Router } from '@angular/router';
import { RestLeagueService } from 'src/app/services/restLeague/rest.league.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { RestMatchService } from 'src/app/services/restMatch/rest-match.service';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { ElementRef, ViewChild } from '@angular/core';  
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-league-select',
  templateUrl: './league-select.component.html',
  styleUrls: ['./league-select.component.css']
})
export class LeagueSelectComponent implements OnInit {
  public league: League;
  leagueSelect: League;
/*   public userAdmin: User;
  public possiblePass; */
  public uri: string;
  public token; 
  public match: Match;
  user; 
  teams: [];
  teamSelect: Team;
  teamInfo: Team;
  matches: [];
  matchSelect: Team;
  data = [];
  columnNames=['Name','Points'];
  options={
    legend: 'none'
   };
  today = new Date().toISOString().slice(0,10);


  constructor(private restLeague:RestLeagueService, private restUser:RestUserService, private restTeam: RestTeamService, private restMatch:RestMatchService,private route:Router) {
    this.league = this.restLeague.getLeagueSelect();
    this.user = this.restUser.getUser();
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.league = this.restLeague.getLeagueSelect();
    this.user = this.restUser.getUser();
    this.listTeams();
    this.listMatches();
  }

  listTeams(){
    this.restTeam.getTeams(this.league._id).subscribe((res:any) => {
      if(res.teamsFind){
        this.teams = res.teamsFind;
        this.data = res.teamsFind.map(team => [team.nameTeam,team.points]);
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }

  listMatches(){
    this.restMatch.getMatches(this.league._id).subscribe((res:any) => {
      if(res.matchFind){
        this.matches = res.matchFind;
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }

  obtenerData(league){
    this.leagueSelect = league;
    this.route.navigateByUrl('profileLeague')
  }


  selectTeam(team){
    localStorage.setItem('teamSelect', JSON.stringify(team));
    this.route.navigateByUrl('/profileTeam');
  }

  createMatches(){
    this.restMatch.createMatch(this.user._id, this.league._id).subscribe((res:any) => {
      if(res.leagueFind){
        this.match = new Match([],[],[],[],null,[],[], null);
        alert(res.message);
      }else{
        alert(res.message);
      }
    },
    error => alert(error.message));
  }

  obtenerDataResult(match){
    localStorage.setItem('matchSelect', JSON.stringify(match));
    this.route.navigateByUrl('matchResult');
  }  

  /* onSubmit(){
    this.restUser.updateAdvancedOption(this.user, this.userAdmin._id, this.user._id).subscribe((res:any) => {
      if(res.userUpdated){
        delete res.userUpdated.rol;
        delete res.userUpdated.password;
        localStorage.setItem('userSelect', JSON.stringify(res.userUpdated))
        alert(res.message);
      }else{
        alert(res.message);
        this.user = this.restUser.getUserSelect();
      }
    },
    (error:any) => alert(error.error.message)
    )
  } */

 /*  deleteUser(){
    this.restUser.removeAdvancedOption(this.possiblePass,this.userAdmin._id, this.user._id).subscribe((res:any) => {
      if(!res.userRemoved){
        alert(res.message);
      }else{
        alert(res.message);
        localStorage.removeItem('userSelect');
        this.router.navigateByUrl('home');
      }
    },
    (error:any) => alert(error.error.message)
    )
  } */

}   