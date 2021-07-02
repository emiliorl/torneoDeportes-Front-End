import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team';
import { CONNECTION } from 'src/app/services/global';
import { RestLeagueService } from 'src/app/services/restLeague/rest.league.service';
import { RestTeamService } from 'src/app/services/restTeam/rest-team.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-profile-team',
  templateUrl: './profile-team.component.html',
  styleUrls: ['./profile-team.component.css']
})
export class ProfileTeamComponent implements OnInit {

  public team : Team; 
  public user;
  public league;
  public possiblePass;
  public filesToUpload: Array<File>;
  public uri : string;
  public token;

  constructor(private restTeam: RestTeamService, private restUser: RestUserService, private restLeague: RestLeagueService, private router : Router) {
    this.possiblePass = '';
    this.user = this.restUser.getUser();
    this.league = this.restLeague.getLeagueSelect();
    this.token = this.restLeague.getToken();
    this.uri = CONNECTION.URI;
    this.team = this.restTeam.getTeamStorage();
  }

  ngOnInit(): void {
    this.team = this.restTeam.getTeamStorage();
    this.user = this.restUser.getUser();
    this.league = this.restLeague.getLeagueSelect();
  }

  onSubmit(team){
    console.log(this.team);
    this.restTeam.updateTeam(this.user._id, this.team, this.league._id, this.team._id).subscribe((res:any)=>{
      if(res.teamUpdated){
        alert(res.message);
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message));
  }

  deleteTeam(){
    this.restTeam.deleteTeam(this.user._id, this.league._id, this.league._id, this.possiblePass).subscribe((res:any)=>{
      if(res.teamRemoved){
        alert(res.message);
        this.router.navigateByUrl('leagueSelect');
      }else{
        alert(res.message);
      }
    },
    (error:any) => alert(error.error.message));
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
  }

  uploadImage(){
    console.log('usuario', this.user._id);
    this.restTeam.uploadImage(this.user._id, this.league._id, this.team._id, [], this.filesToUpload, this.token, 'imageTeam')
    .then((res : any)=>{
      if(res.team){
        this.team.imageTeam = res.imageTeam;        
      }else{
        alert(res.message);
      }
    })
  }
}
