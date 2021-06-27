import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //formularios y todo lo que lleve consigo, funciones ng
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';  

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RestUserService } from './services/restUser/rest-user.service';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateUserByAdminComponent } from './components/create-user-by-admin/create-user-by-admin.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ProfileUserSelectComponent } from './components/profile-user-select/profile-user-select.component';
import { LeagueComponent } from './components/league/league.component';
import { LeagueSelectComponent } from './components/league-select/league-select.component';
import { ProfileLeagueComponent } from './components/profile-league/profile-league.component';
import { CreateLeagueComponent } from './components/create-league/create-league.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CreateUserByAdminComponent,
    ListUserComponent,
    ProfileUserSelectComponent,
    LeagueComponent,
    LeagueSelectComponent,
    ProfileLeagueComponent,
    CreateLeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule  
  ],
  providers: [RestUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
