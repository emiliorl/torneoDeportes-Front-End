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

  public httpOptionAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
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

  createPlayer(service,userId){
    let params = JSON.stringify(service);
    return this.http.post(this.uri+'/'+userId+'/createPlayer/', params, this.httpOptionAuth)
    .pipe(map(this.extractData))
  }

  updatePlayer(paramsUpdate, userId, teamId){
    let params = JSON.stringify(paramsUpdate);
    return this.http.put(this.uri+'/'+userId+'/'+'updatePlayer/'+teamId, params, this.httpOptionAuth)
    .pipe(map(this.extractData));
  }

  deletePlayer(userId,teamId, password, player){
    return this.http.post(this.uri+'/'+userId+'/deletePlayer/'+teamId, {name: player, passwordAdmin: password}, this.httpOptionAuth)
    .pipe(map(this.extractData));
  }

  listPlayer(teamId){
    return this.http.get(this.uri+'/'+teamId+'/listPlayer')
    .pipe(map(this.extractData));
  }

  getPlayer(){
    let player = JSON.parse(localStorage.getItem('league'));
    if(player != undefined || player != null){
      this.player = player;
    }else{
      this.player = null;
    }
    return this.player;
  }
}