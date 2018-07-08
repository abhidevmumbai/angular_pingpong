import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameService } from './services/game.service';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

let routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'games/create',
    component: CreateGameComponent
  },
  {
    path: 'games/edit/:id',
    component: EditGameComponent
  },
];
const rootRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameDetailsComponent,
    CreateGameComponent,
    EditGameComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    rootRouting
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }