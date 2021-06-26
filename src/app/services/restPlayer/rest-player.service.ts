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

  createPlayer(service,userId){
    let params = JSON.stringify(service);
    return this.http.post(this.uri+'/'+userId+'/createPlayer/', params, this.HttpOptionsAuth)
    .pipe(map(this.extractData))
  }

  updatePlayer(paramsUpdate, userId, teamId){
    let params = JSON.stringify(paramsUpdate);
    return this.http.put(this.uri+'/'+userId+'/'+'updatePlayer/'+teamId, params, this.HttpOptionsAuth)
    .pipe(map(this.extractData));
  }

  deletePlayer(userId,teamId, password, player){
    return this.http.post(this.uri+'/'+userId+'/deletePlayer/'+teamId, {name: player, passwordAdmin: password}, this.HttpOptionsAuth)
    .pipe(map(this.extractData));
  }

  listPlayer(teamId){
    return this.http.get(this.uri+'/'+teamId+'/listPlayer')
    .pipe(map(this.extractData));
  }

}