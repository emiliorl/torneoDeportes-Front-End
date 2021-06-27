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
    this.restUser.saveUserByAdmin(this.user, this.userLogg._id).subscribe((res:any) => {
      if(res.userSaved){
        alert(res.message);
        this.user = new User('','','','','',null,'','','');
        statusForm.reset();
      }else{
        alert(res.message);
      }
    },
    error => alert(error.message));
  }
}
