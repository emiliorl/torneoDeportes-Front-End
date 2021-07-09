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
    playerSelect: Player;

  constructor(private restPlayer: RestPlayerService, private restUser:RestUserService, private route: Router) { 
    this.possiblePass = '';
    this.user = this.restUser.getUser();
    this.token = this.restPlayer.getToken();
    this.player = this.restPlayer.getPlayerSelect();
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.player = new Player(null,'','','',null,null,null,null,[]);
    this.user = JSON.parse(localStorage.getItem('user'));
    this.player = JSON.parse(localStorage.getItem('playerSelect'));
  }

  obtenerData(player){
    this.playerSelect = player;
    this.route.navigateByUrl('profilePlayer')
  }

  onSubmit(){
    this.restPlayer.updatePlayer(this.user, this.player).subscribe((res:any) => {
      if(res.playerUpdate){
        localStorage.setItem('playerSelect', JSON.stringify(res.playerUpdate))
        alert(res.message);
      }else{
        alert(res.message);
        this.player = this.restPlayer.getPlayerSelect();
      }
    },
    (error:any) => alert(error.error.message)
    )
  }

  deletePlayer(){
    this.restPlayer.deletePlayer(this.user._id ,this.player._id).subscribe((res:any) => {
      if(!res.playerRemoved){
        alert(res.message);
      }else{
        alert(res.message);
        localStorage.removeItem('playerSelect');
        this.route.navigateByUrl('listPlayer');
      }
    },
    (error:any) => alert(error.message)
    )
  }

  
}
