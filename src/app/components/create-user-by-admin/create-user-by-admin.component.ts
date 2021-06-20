import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-create-user-by-admin',
  templateUrl: './create-user-by-admin.component.html',
  styleUrls: ['./create-user-by-admin.component.css']
})
export class CreateUserByAdminComponent implements OnInit {
  public user: User;
  public optionsRol = ['USER', 'ADMIN'];
  public userLogg;

  constructor(private restUser: RestUserService) {
    this.user = new User('','','','','',null,'','','');
    this.userLogg = this.restUser.getUser();
  }

  ngOnInit(): void {
  }

  onSubmit(statusForm){

  }
}
