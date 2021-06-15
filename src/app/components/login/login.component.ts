import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { Router } from '@angular/router';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  userLogged: any;
  token: any;

  constructor(private restUser:RestUserService, private route:Router) {
    this.user = new User('','','','','',0,'','','');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
