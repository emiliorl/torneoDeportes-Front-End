import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';
import { RestTeamService } from '../restTeam/rest-team.service';
import { RestUserService } from '../restUser/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class RestPlayerService {

  public uri;
  public service;
  public token;
  public player;
  public playerSelect;

  public httpOptionAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })    
  };
  public httpOptions = {
    headers:new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http:HttpClient, private restUser:RestUserService, private restTeam:RestTeamService) {
    this.uri = CONNECTION.URI;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != undefined || token != null){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

  createPlayer(user, player){
    let params = JSON.stringify(player);
    return this.http.post(this.uri+'/'+user+'/createPlayer/', params, this.httpOptionAuth)
    .pipe(map(this.extractData))
  }

  updatePlayer(paramsUpdate, playerSelect){
    let params = JSON.stringify(paramsUpdate);
    return this.http.put(this.uri+playerSelect+'/'+'updatePlayer/', params, this.httpOptionAuth)
    .pipe(map(this.extractData));
  }

  deletePlayer(userId,player){
    return this.http.post(this.uri+userId+'/deletePlayer/'+player, {} ,this.httpOptionAuth)
    .pipe(map(this.extractData));
  }

  listPlayer(teamId){
    return this.http.get(this.uri+'/'+teamId+'/listPlayer')
    .pipe(map(this.extractData));
  }

  getPlayerSelect(){
    let playerSelect = JSON.parse(localStorage.getItem('playerSelect'));
    if(playerSelect != undefined || playerSelect != null){
      this.playerSelect = playerSelect;
    }else{
      this.playerSelect = null;
    }
    return this.playerSelect;
  }

  getPlayer(){
    return this.http.get(this.uri+'/listPlayer', this.httpOptions)
    .pipe(map(this.extractData));
  }

}