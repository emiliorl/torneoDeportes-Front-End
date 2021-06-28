import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { RestPlayerService } from 'src/app/services/restPlayer/rest-player.service';
import { CONNECTION } from 'src/app/services/global';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-profile-player',
  templateUrl: './profile-player.component.html',
  styleUrls: ['./profile-player.component.css']
})
export class ProfilePlayerComponent implements OnInit {
    public uri: string;
    public user: User;
    public team: Team;
    public possiblePass;
    public token; 
    public player: Player;
    playerSelected: Player;

  constructor(private restPlayer: RestPlayerService, private restUser:RestUserService, private route: Router) { 
    this.possiblePass = '';
    this.user = this.restUser.getUser();
    this.token = this.restPlayer.getToken();
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.player = this.restPlayer.getPlayer();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onSubmit(){
    this.restPlayer.updatePlayer(this.user, this.player).subscribe((res:any) => {
      if(res.playerUpdate){
        localStorage.setItem('player', JSON.stringify(res.playerUpdate))
        alert(res.message);
      }else{
        alert(res.message);
        this.player = this.restPlayer.getPlayer();
      }
    },
    (error:any) => alert(error.error.message)
    )
  }

  deletePlayer(){
    this.restPlayer.deletePlayer(this.user._id ,this.team._id).subscribe((res:any) => {
      if(!res.playerRemoved){
        alert(res.message);
      }else{
        alert(res.message);
        localStorage.removeItem('player');
        this.route.navigateByUrl('list-player');
      }
    },
    (error:any) => alert(error.message)
    )
  }

  
}
