import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { RestPlayerService } from 'src/app/services/restPlayer/rest-player.service';
import { CONNECTION } from 'src/app/services/global';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-player-selected',
  templateUrl: './player-selected.component.html',
  styleUrls: ['./player-selected.component.css']
})
export class PlayerSelectedComponent implements OnInit {
    public uri: string;
    public user: User;
    public player: Player;
    playerSelected: Player;

  constructor(private restPlayer: RestPlayerService, private restUser:RestUserService, private route: Router) { 
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.player = this.restPlayer.getPlayer();
    this.user = JSON.parse(localStorage.getItem('user'));
  }


  
}
