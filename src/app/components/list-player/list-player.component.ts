import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { RestPlayerService } from 'src/app/services/restPlayer/rest-player.service';
import { CONNECTION } from 'src/app/services/global';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {
    public uri: string;
    public user: User;
    public player: Player;
    profilePlayer: Player;
    token: string;
    playerSelect: Player;
    users: [];

  constructor(private restPlayer: RestPlayerService, private restUser:RestUserService, private route: Router) { 
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.player = new Player(null,'','','',null,null,null,null,[]);
    /*this.user = JSON.parse(localStorage.getItem('user'));
    this.token = localStorage.getItem('token');
    this.user = this.restUser.getUser();*/
    this.user = new User('','','','','',null,'','','');
    this.token = localStorage.getItem('token');
    this.user = this.restUser.getUser();
    this.listPlayer();
  }

  listPlayer(){
    this.restPlayer.getPlayer().subscribe((res:any) => {
      if(res.playerFind){
          this.player = res.playerFind;
      }else{
        alert(res.message)
      }
    },
    error => alert(error.message));
  }


  obtenerData(player){
    this.playerSelect = player;
    localStorage.setItem('playerSelect', JSON.stringify(this.playerSelect));
    this.route.navigateByUrl('profilePlayer')
  }

  /*obtenerData(player){
    localStorage.setItem('profilePlayer', JSON.stringify(player));
    this.route.navigateByUrl('profilePlayer')
  }*/
  
}
