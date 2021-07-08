import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserByAdminComponent } from './components/create-user-by-admin/create-user-by-admin.component';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileUserSelectComponent } from './components/profile-user-select/profile-user-select.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LeagueComponent } from './components/league/league.component';
import { LeagueSelectComponent } from './components/league-select/league-select.component';
import { ProfileLeagueComponent } from './components/profile-league/profile-league.component';
import { CreateLeagueComponent } from './components/create-league/create-league.component';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { ListPlayerComponent } from './components/list-player/list-player.component';
import { ProfilePlayerComponent } from './components/profile-player/profile-player.component';
import { CreateTeamComponent } from './components/create-team/create-team.component';
import { ProfileTeamComponent } from './components/profile-team/profile-team.component';
import { CreateMatchComponent } from './components/create-match/create-match.component';
import { ProfileMatchComponent } from './components/profile-match/profile-match.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'Home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'createUser', component: CreateUserByAdminComponent},
  {path: 'listUsers', component: ListUserComponent},
  {path: 'profileUserSelect', component: ProfileUserSelectComponent},
  {path: 'leagues', component: LeagueComponent},
  {path: 'leagueSelect', component: LeagueSelectComponent},
  {path: 'profileLeague', component: ProfileLeagueComponent},
  {path: 'createLeague', component: CreateLeagueComponent},
  {path: 'createPlayer', component: CreatePlayerComponent},
  {path: 'listPlayer', component: ListPlayerComponent},
  {path: 'profilePlayer', component: ProfilePlayerComponent},
  {path: 'createTeam', component: CreateTeamComponent},
  {path: 'profileTeam', component: ProfileTeamComponent},
  {path: 'createMatch', component: CreateMatchComponent},
  {path: 'profileMatch', component: ProfileMatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
