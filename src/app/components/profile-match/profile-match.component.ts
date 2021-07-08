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

  constructor(private resMatch:RestMatchService, private resLeague:RestLeagueService, private resUser: RestUserService, private route: Router) {
    this.league = this.resLeague.getLeagueSelect();
    this.match = this.resMatch.getMatchSelect();
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
    /*
    this.resMatch.updateMatch(this.date).subscribe((res:any) => {
      if(res.matchUpdate){
        localStorage.setItem('matchSelect', JSON.stringify(res.matchUpdate))
        alert(res.message);
      }else{
        alert(res.message);
        this.league = this.resMatch.getMatchSelect();
      }
    },
    (error:any) => alert(error.error.message)
    )
    */
    }

  }
