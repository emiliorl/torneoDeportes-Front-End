import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/models/league';
import { RestLeagueService } from 'src/app/services/restLeague/rest.league.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  public user: User;
  leagues: [];
  leagueslength;
  search;
  league;
  leagueSelect: League;

  constructor(private restLeague: RestLeagueService, private restUser:RestUserService, private route: Router) { }

  ngOnInit(): void {
    this.league = new League('','','',null,[],'',[],[],'');
    this.user = new User('','','','','',null,'','','');
    this.user = this.restUser.getUser();
    if(this.user != null){
      this.listMyLeagues();
    }
    this.listLeagues();
    if(this.leagues != undefined){
      this.leagueslength = this.leagues.length;
    }
  }

  listLeagues(){
    this.restLeague.getLeagues().subscribe((res:any) => {
      if(res.leagueFind){
        if(this.leagues != undefined && this.leagues.length > 0){
          this.leagues = this.leagues+res.leagueFind;
        }else{
          this.leagues = res.leagueFind;
        }
      }else{
        alert(res.message)
      }
    },
    error => alert(error.message));
  }

  listMyLeagues(){
    this.restLeague.getMyLeagues(this.user._id).subscribe((res:any) => {
      if(res.leagueFind){
        this.leagues = res.leagueFind;
      }else{
        alert(res.message)
      }
    },
    error => alert(error.message));
  }

  obtenerData(league){
    this.leagueSelect = league;
    localStorage.setItem('leagueSelect', JSON.stringify(this.leagueSelect));
    this.route.navigateByUrl('leagueSelect')
  }

}
