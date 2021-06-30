import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { User } from 'src/app/models/user';
import { RestLeagueService } from 'src/app/services/restLeague/rest.league.service';
import { League } from 'src/app/models/league';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  public team: Team;
  public user;
  public league;
  constructor(private restTeam : RestTeamService, private restUser: RestUserService, private route :Router, private restLeague: RestLeagueService) {
    this.team = new Team ('','','','','','','','',null,[],[]);
    this.user = this.restUser.getUser();
    this.league = this.restLeague.getLeagueSelect();
   }

  ngOnInit(): void {
    console.log('liga' + this.league);
    console.log('usuario ' + this.user);
    
  }

  onSubmit(statusForm){

    console.log('Aca va esto' , this.league);
    this.restTeam.saveTeam(this.team, this.user._id, this.league._id).subscribe((res:any)=>{
      if(res.teamPush){
        this.team = new Team ('','','','','','','','',null,[],[]);
        statusForm.reset();
        alert(res.message);
        //enrutar cuando logre guardar
      }else{
        alert(res.message);
      }
    },
    error => alert(error.message));
  }
}
