import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Game } from './game';

import { GameService } from '../services/game.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers:[GameService]
})
export class GamesComponent implements OnInit, OnDestroy {
	gameSub: Subscription;
	games: Game[];
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

  deleteGame(idx, id) {
    console.log(idx);
     this.gameService.deleteGame(id).subscribe(res => {
       console.log(res);
       this.games.splice(idx, 1);
     })
  }

  ngOnDestroy() {
  	this.gameSub.unsubscribe();
  }

}
