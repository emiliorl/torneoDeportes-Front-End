
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CONNECTION } from '../global';

@Injectable({
  providedIn: 'root'
})
export class RestTeamService {
  public uri:string;
  public httpOptions = {
    headers:new HttpHeaders({
      'Content-Type' : 'application/json'

    })
  };
  public httpOptionAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  };

  public user;
  public token;
  public team;

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  constructor(private http:HttpClient) {
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


  saveTeam(team, userId, leagueId){
    let params = JSON.stringify(team);
    return this.http.post(this.uri+'/'+userId+'/createTeam/'+leagueId, params, this.httpOptionAuth)
      .pipe(map(this.extractData));
  }

  deleteTeam(userId, leagueId, teamId, password1){
    console.log(password1);
    return this.http.post(this.uri+'/'+userId+'/deleteTeam/'+leagueId+'/'+teamId, {password : password1}, this.httpOptionAuth)
      .pipe(map(this.extractData));
  }

  updateTeam(userId, updateTeam, leagueId, teamId){
    console.log(JSON.stringify(updateTeam));
    let params = JSON.stringify(updateTeam);
    return this.http.put(this.uri+'/'+userId+'/updateTeam/'+leagueId+'/'+teamId, params, this.httpOptionAuth)
      .pipe(map(this.extractData));
  }

  listTeams(leagueId){
    return this.http.get(this.uri+leagueId+'/listTeams', ).pipe(map(this.extractData));
  }

  getTeam(){
    return this.http.post(this.uri+'/getTeam', {}).pipe(map(this.extractData));
  }

  getTeamStorage(){
    let team = JSON.parse(localStorage.getItem('teamSelect'));
    if(team != undefined || team != null){
      this.team = team;
    }else{
      this.team = null;
    }
    return this.team;
  }

  uploadImage(idUser, idLeague, idTeam, params: Array<string>, files: Array<File>, token:string, name:string){
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      let uri = this.uri+idUser+'/'+idLeague+'/uploadImage/'+idTeam;

      for(var i=0; i<files.length; i++){
        formData.append(name, files[i], files[i].name)
      }
      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      }
      xhr.open('PUT', uri, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
    });
  }

  getTeams(idLeague){
    return this.http.get(this.uri+'/'+idLeague+'/listTeams')
    .pipe(map(this.extractData));
  }

  
}
