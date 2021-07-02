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
    let params = JSON.stringify(idUser,idLeague);
    return this.http.post(this.uri+'/'+idUser+'/'+idLeague+'/createMatches/', params, this.httpOptionAuth)
    .pipe(map(this.extractData))
  }
  
  updateMatch(paramsUpdate, idMatch, idLeague){
    let params = JSON.stringify(paramsUpdate);
    return this.http.put(this.uri+'/'+idMatch+'/'+idLeague+'/'+'updateMatch/', params, this.httpOptionAuth)
    .pipe(map(this.extractData));
  }
  
  /*
  --PENDIENTE--
  deleteMatch(userId,teamId){
    return this.http.post(this.uri+'/'+userId+'/deletePlayer/'+teamId, this.httpOptionAuth)
    .pipe(map(this.extractData));
  }
  */
  
  listMatch(idLeague){
    return this.http.get(this.uri+'/'+idLeague+'/listMatches')
    .pipe(map(this.extractData));
  }
  
  searchMatch(idMatch){
    return this.http.get(this.uri+'/'+idMatch+'/searchMatch')
    .pipe(map(this.extractData));
  }

}
