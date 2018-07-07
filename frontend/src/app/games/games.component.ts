import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Game } from './game';
// import { AuthService } from '../services/auth.service';
import { GameService } from '../services/game.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers:[GameService]
})
export class GamesComponent implements OnInit, OnDestroy {
	gameSub: Subscription;
	games: any;
	error: any

  constructor(
  	public gameService: GameService
  	// public authService: AuthService
  	) {}

  ngOnInit() {
  	this.gameSub = this.gameService
  		.getGames()
  		.subscribe(
  			games => this.games = games,
  			err => this.error = err
  		);
  }

  ngOnDestroy() {
  	this.gameSub.unsubscribe();
  }

}
