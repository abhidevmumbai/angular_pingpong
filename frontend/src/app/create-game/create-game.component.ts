import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
	createGameForm: FormGroup;

	constructor(private gameService: GameService, private fb: FormBuilder) { 
		this.createForm();
	}

	ngOnInit() {
	}

	createForm() {
		this.createGameForm = this.fb.group({
			date: ['', Validators.required ],
			player1: ['', Validators.required ],
			player2: ['', Validators.required ],
			player1Score: ['', Validators.required ],
			player2Score: ['', Validators.required ]

		});
	}

	createGame(date, player1, player2, player1Score, player2Score) {
		this.gameService.createGame(new Date(date), player1, player2, player1Score, player2Score).subscribe(res => console.log(res));
	}

}
