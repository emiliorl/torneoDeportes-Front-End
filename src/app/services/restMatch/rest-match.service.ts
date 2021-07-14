import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestMatchService {
  
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

  public token;
  public match;

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

  getMatches(idLeague){
    return this.http.get(this.uri+'/'+idLeague+'/listMatches')
    .pipe(map(this.extractData));
  }

  createMatch(idUser,idLeague){
    console.log('id usuario',idUser);
    console.log('id ligas',idLeague);
    let params = JSON.stringify(idUser,idLeague);
    return this.http.post(this.uri+'/'+idUser+'/'+idLeague+'/createMatches', {}, this.httpOptionAuth)
    .pipe(map(this.extractData))
  }
  
  updateMatch(Match, League){
    let params = JSON.stringify(Match);
    return this.http.put(this.uri + Match._id +'/'+League._id+'/'+'updateMatch', params, this.httpOptionAuth)
    .pipe(map(this.extractData));
  }
  

  
  listMatch(idLeague){
    return this.http.get(this.uri+'/'+idLeague+'/listMatches')
    .pipe(map(this.extractData));
  }
  
  searchMatch(idMatch){
    return this.http.get(this.uri+'/'+idMatch+'/searchMatch')
    .pipe(map(this.extractData));
  }

  getMatchSelect(){
    let match = JSON.parse(localStorage.getItem('matchSelect'));
    if(match != undefined || match != null){
      this.match = match;
    }else{
      this.match = null;
    }
    return this.match;
  }
}
