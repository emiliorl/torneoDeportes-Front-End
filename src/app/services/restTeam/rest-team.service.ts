import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

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

  public token;

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

  getTeams(idLeague){
    return this.http.get(this.uri+'/'+idLeague+'/listTeams')
    .pipe(map(this.extractData));
  }

}
