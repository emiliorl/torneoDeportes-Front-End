import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: [];
  search;
  user;
  userSelect: User;
  possiblePass;
  possibleUsername;

  constructor(private restUser: RestUserService, private route: Router) { }

  ngOnInit(): void {
    this.user = new User('','','','','',null,'','','');
    this.user
    this.listUsers();
  }

  listUsers(){
    this.restUser.getUsers().subscribe((res:any) => {
      if(res.users){
        this.users = res.users;
        console.log(res.message);
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message));
  }

  obtenerData(user){
    this.userSelect = user;
    delete this.userSelect.rol;
    delete this.userSelect.password;
    localStorage.setItem('userSelect', JSON.stringify(this.userSelect));
    this.route.navigateByUrl('profileUserSelect')
  }

  /*
  optionsOfAdmin(userRemoved){
    this.restUser.AdvancedOptions(this.user).subscribe((res:any) => {
      if(res.x = true){
        userRemoved.reset();
        alert(res.message);
        
      }else{
        alert(res.message);
      }
    });    
    error => console.log(<any>error);
  }
  */

}
