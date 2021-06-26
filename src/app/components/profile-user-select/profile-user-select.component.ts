import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-user-select',
  templateUrl: './profile-user-select.component.html',
  styleUrls: ['./profile-user-select.component.css']
})
export class ProfileUserSelectComponent implements OnInit {
  public user: User;
  public userAdmin: User;
  public possiblePass;
  public uri: string;
  public token;  

  constructor(private restUser:RestUserService, private router:Router) {
    this.possiblePass = '';
    this.userAdmin = this.restUser.getUser();
    this.user = this.restUser.getUserSelect();
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.restUser.updateAdvancedOption(this.user, this.userAdmin._id, this.user._id).subscribe((res:any) => {
      if(res.userUpdated){
        delete res.userUpdated.rol;
        delete res.userUpdated.password;
        localStorage.setItem('userSelect', JSON.stringify(res.userUpdated))
        alert(res.message);
      }else{
        alert(res.message);
        this.user = this.restUser.getUserSelect();
      }
    },
    (error:any) => alert(error.message)
    )
  }

  deleteUser(){
    this.restUser.removeAdvancedOption(this.possiblePass,this.userAdmin._id, this.user._id).subscribe((res:any) => {
      if(!res.userRemoved){
        alert(res.message);
      }else{
        alert(res.message);
        localStorage.removeItem('userSelect');
        this.router.navigateByUrl('home');
      }
    },
    (error:any) => alert(error.error.message)
    )
  }

}
