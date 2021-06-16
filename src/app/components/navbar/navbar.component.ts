import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { CONNECTION } from '../../services/global';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: string;
  user;
  uri;

  constructor(private route:Router, private restUser: RestUserService) {

  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('user'));
    this.uri = CONNECTION.URI;
  }

  ngDoCheck(){
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  logOut(){
    localStorage.clear();
    this.route.navigateByUrl('home')
  }

}
