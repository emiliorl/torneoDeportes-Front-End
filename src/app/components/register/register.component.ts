import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user:User;

  constructor(private userService: RestUserService, private route: Router) {
    this.user = new User('','','','','',null,'','','');
  }

  ngOnInit(): void {
  }

  onSubmit(register){
    this.userService.saveUser(this.user).subscribe((res:any) => {
      if(res.userSaved){
        alert(res.message);
        register.reset();
        this.route.navigateByUrl('login');
      }else{
        alert(res.message);
      }
    });
    
    error => console.log(<any>error);
  }
}
