import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  
  constructor( private _authService : RestUserService,
    private _router : Router){}

  canActivate () : boolean{
    if(this._authService.getToken()){
      console.log(localStorage.getItem('token'))
      return true
    } else{
      this._router.navigate(['/login'])
      return false
    }
}  

}
