import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestLeagueService } from 'src/app/services/restLeague/rest.league.service';
import { RestMatchService } from 'src/app/services/restMatch/rest-match.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-profile-match',
  templateUrl: './profile-match.component.html',
  styleUrls: ['./profile-match.component.css']
})
export class ProfileMatchComponent implements OnInit {
  public league;
  public match;
  public user;
  today = new Date();
  year = this.today.getFullYear();
  month = this.today.getMonth()+1;
  day = this.today.getDate();
  startingDate;
  startingDateFormat;
  todayFormat;
  date;
  updateForm;

  constructor(private restMatch:RestMatchService, private resLeague:RestLeagueService, private resUser: RestUserService, private route: Router) {
    this.league = this.resLeague.getLeagueSelect();
    this.match = this.restMatch.getMatchSelect();
    this.user = this.resUser.getUserSelect();
  }

  ngOnInit(): void {
    /*this.date = this.league.startingDate;
    this.listTeams();
    this.startingDate = new Date(this.league.startingDate).toLocaleDateString();
    this.startingDateFormat = this.startingDate;
    this.formatDate();
    this.listMatches();*/
  }

  onSubmit(){
    this.restMatch.updateMatch(this.match, this.league).subscribe((res:any) => {
      if(res.matchUpdated){
        localStorage.setItem('matchSelect', JSON.stringify(res.matchUpdated))
        alert(res.message);
      }else{
        alert(res.message);
        this.league = this.restMatch.getMatchSelect();
      }
    },
    (error:any) => alert(error.error.message)
    )

    }

  }
