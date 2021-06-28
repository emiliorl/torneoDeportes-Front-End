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
import { RestLeagueService } from './services/restLeague/rest.league.service';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateUserByAdminComponent } from './components/create-user-by-admin/create-user-by-admin.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ProfileUserSelectComponent } from './components/profile-user-select/profile-user-select.component';
import { LeagueComponent } from './components/league/league.component';
import { LeagueSelectComponent } from './components/league-select/league-select.component';
import { ProfileLeagueComponent } from './components/profile-league/profile-league.component';
import { CreateLeagueComponent } from './components/create-league/create-league.component';
import { SearchPipe } from './pipes/search.pipe';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { ListPlayerComponent } from './components/list-player/list-player.component';
import { ProfilePlayerComponent } from './components/profile-player/profile-player.component';

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
    CreateLeagueComponent,
    SearchPipe,
    CreatePlayerComponent,
    ListPlayerComponent,
    ProfilePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule  
  ],
  providers: [
    RestUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
