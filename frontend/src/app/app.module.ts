import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './game-details/game-details.component';

let routes = [{
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'games/:id',
    component: GameDetailsComponent,
    pathMatch: 'full'
  }
];
const rootRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }