import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONNECTION } from 'src/app/services/global';
import { RestLeagueService } from 'src/app/services/restLeague/rest.league.service';
import { RestMatchService } from 'src/app/services/restMatch/rest-match.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.css']
})
export class MatchResultComponent implements OnInit {

  public league;
  public match;
  public user;
  public uri : string;

  constructor(private restMatch:RestMatchService, private resLeague:RestLeagueService, private resUser: RestUserService, private route: Router) {
    this.league = this.resLeague.getLeagueSelect();
    this.match = this.restMatch.getMatchSelect();
    this.user = this.resUser.getUserSelect();
    this.uri = CONNECTION.URI;
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
