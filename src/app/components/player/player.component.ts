import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { RestPlayerService } from 'src/app/services/restPlayer/rest-player.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
  })
  export class PlayerComponent implements OnInit {
    public user: User;
  
    constructor(private restPlayer: RestPlayerService, private restUser:RestUserService, private route: Router) { }
  
    ngOnInit(): void {
    }
/*
    onSubmit()
        this.restPlayer.updatePlayer(this.player).subscribe((res:any) => {
          if(res.userUpdated){
            delete res.userUpdated.password;
            localStorage.setItem('user', JSON.stringify(res.userUpdated))
            alert(res.message)
          }else{
            alert(res.message);
            this.user = this.restUser.getUser();
          }
        },
          (error:any) => alert(error.error.message)
        )
      }
*/
  }