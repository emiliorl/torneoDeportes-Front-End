import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { RestPlayerService } from 'src/app/services/restPlayer/rest-player.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
    selector: 'app-player',
    templateUrl: './create-player.component.html',
    styleUrls: ['./create-player.component.css']
  })
  export class CreatePlayerComponent implements OnInit {
    public user: User;
    public player: Player;
  
    constructor(private restPlayer: RestPlayerService, private restUser:RestUserService, private route: Router) {
      this.player = new Player('','','',null,null,null,null,[]);
      this.user = this.restUser.getUser();
     }
  
    ngOnInit(): void {
    }

    onSubmit(statusForm){
      this.restPlayer.createPlayer(this.user._id, this.player).subscribe((res:any) => {
        if(res.userSaved){
          this.player = new Player('','','',null,null,null,null,[]);
          statusForm.reset();
          this.route.navigateByUrl('player');
        }else{
          alert(res.message);
        }
      },
      error => alert(error.message));
    }
  
    /*onSubmit(statusForm){
      this.restPlayer.createPlayer(this.user._id, this.player).subscribe((res:any) => {
        if(res.playerPush){
          this.player = new Player('','','',null,null,null,null,[]);
          statusForm.reset();
          this.route.navigateByUrl('player');
        }else{
          alert(res.message);
        }
      },
      error => alert(error.message));
    }*/
  
}