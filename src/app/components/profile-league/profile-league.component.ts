import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { League } from 'src/app/models/league';
import { Team } from 'src/app/models/team';
import { User } from 'src/app/models/user';
import { Match } from 'src/app/models/match';
import { Router } from '@angular/router';
import { RestLeagueService } from 'src/app/services/restLeague/rest.league.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { RestMatchService } from 'src/app/services/restMatch/rest-match.service';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';

@Component({
  selector: 'app-profile-league',
  templateUrl: './profile-league.component.html',
  styleUrls: ['./profile-league.component.css']
})
export class ProfileLeagueComponent implements OnInit {
  public league: League;
  leagueSelect: League;
  public userAdmin: User;
  public possiblePass;
  public uri: string;
  public token; 
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
  today = new Date();
  year = this.today.getFullYear();
  month = this.today.getMonth()+1;
  day = this.today.getDate();
  startingDate;
  startingDateFormat;
  todayFormat;
  date;
  updateForm;
  public optionsShare = ['private','public'];

  constructor(private restLeague:RestLeagueService, private restUser:RestUserService, private restTeam: RestTeamService, private restMatch:RestMatchService,private route:Router) {
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.league = this.restLeague.getLeague();
    this.league = this.restLeague.getLeagueSelect();
    this.date = this.league.startingDate;
    this.user = JSON.parse(localStorage.getItem('user'));
    this.listTeams();
    this.startingDate = new Date(this.league.startingDate).toLocaleDateString();
    this.startingDateFormat = this.startingDate;
    this.formatDate();
    this.listMatches();
  }

  formatDate(){
    if(this.month < 10 && this.day < 10){
      this.todayFormat = this.year+'-0'+this.month+'-0'+this.day;
    }else if(this.month < 10 && this.day >= 10){
      this.todayFormat = this.year+'-0'+this.month+'-'+this.day;
    }else if(this.month >= 10 && this.day < 10){
      this.todayFormat = this.year+'-'+this.month+'-0'+this.day;
    }else{
      this.todayFormat = this.year+'-'+this.month+'-'+this.day; 
    }
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

  onSubmit(){
    this.restLeague.updateLeague(this.user, this.league).subscribe((res:any) => {
      if(res.leagueUpdate){
        localStorage.setItem('leagueSelect', JSON.stringify(res.leagueUpdate))
        alert(res.message);
      }else{
        alert(res.message);
        this.league = this.restLeague.getLeagueSelect();
      }
    },
    (error:any) => alert(error.error.message)
    )
  }

  deleteUser(){
    this.restUser.removeAdvancedOption(this.possiblePass,this.userAdmin._id, this.user._id).subscribe((res:any) => {
      if(!res.userRemoved){
        alert(res.message);
      }else{
        alert(res.message);
        localStorage.removeItem('userSelect');
        this.route.navigateByUrl('home');
      }
    },
    (error:any) => alert(error.error.message)
    )
  }
}
