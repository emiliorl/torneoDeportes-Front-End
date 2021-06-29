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
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css']
})
export class CreateLeagueComponent implements OnInit {

  public user: User;
  public optionsRol = ['USER', 'ADMIN'];
  public userLogg;

  public league: League;
  public optionsShare = ['private','public'];

  today = new Date();
  year = this.today.getFullYear();
  month = this.today.getMonth()+1;
  day = this.today.getDate();
  todayFormat;

  constructor(private restLeague: RestLeagueService, private restUser:RestUserService, private route: Router) {
    this.league = new League('','','',null,[],'',[],[],'');
    this.user = this.restUser.getUser();
  }

  ngOnInit(): void {
    this.formatDate();
  }

  onSubmit(statusForm){
    this.restLeague.createLeague(this.user._id, this.league).subscribe((res:any) => {
      if(res.userSaved){
        this.league = new League('','','',null,[],'',[],[],'');
        statusForm.reset();
        this.route.navigateByUrl('leagues');
      }else{
        alert(res.message);
      }
    },
    error => alert(error.message));
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

}
