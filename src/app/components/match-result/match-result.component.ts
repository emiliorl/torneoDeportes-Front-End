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

  constructor(private restMatch:RestMatchService, private restLeague:RestLeagueService, private restUser: RestUserService, private route: Router) {
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.league = this.restLeague.getLeagueSelect();
    this.match = this.restMatch.getMatchSelect();
    this.user = this.restUser.getUser();
  }

  onSubmit(){
    this.restMatch.resultMatch(this.user, this.league, this.match).subscribe((res:any) => {
      if(res.FinalMatch){
        localStorage.setItem('matchSelect', JSON.stringify(res.FinalMatch))
        alert(res.message);
        this.route.navigateByUrl('createMatch')
      }else{
        alert(res.message);
        this.match = this.restMatch.getMatchSelect();
      }
    },
      (error:any) => alert(error.error.message)
    )

  }

}
