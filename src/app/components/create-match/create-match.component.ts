import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { League } from 'src/app/models/league';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { RestLeagueService } from 'src/app/services/restLeague/rest.league.service';
import { RestMatchService } from 'src/app/services/restMatch/rest-match.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.component.html',
  styleUrls: ['./create-match.component.css']
})
export class CreateMatchComponent implements OnInit {
  public match: Match;
  public user: User;
  public league: League;
  matches: [];

  constructor(private restMatch: RestMatchService, private restUser:RestUserService, private restLeague:RestLeagueService, private route: Router) {
    this.match = new Match([],[], [],[],[], [], null);
    this.user = this.restUser.getUser();
    this.league = this.restLeague.getLeagueSelect();
   }

  ngOnInit(): void {
    this.listMatch();
  }

  listMatch(){
    this.restMatch.listMatch(this.league._id).subscribe((res: any)=> {
      if(res.matchFind){
        this.matches = res.matchFind;
      }else{
        alert(res.message);
      }
    }, error => alert(error.message));
  }

  obtenerData(match){
    localStorage.setItem('matchSelect', JSON.stringify(match));
    this.route.navigateByUrl('profileMatch');
  }

}