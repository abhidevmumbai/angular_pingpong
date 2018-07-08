import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {
	createGameForm: FormGroup;
	opponents: any;

	constructor(private auth: AuthenticationService, private gameService: GameService, private fb: FormBuilder) { 
		this.createForm();
	}

	ngOnInit() {
		this.getOpponents();
	}

	createForm() {
		this.createGameForm = this.fb.group({
			date: ['', Validators.required ],
			player2: ['', Validators.required ],
			player1Score: ['', Validators.required ],
			player2Score: ['', Validators.required ]

		});
	}

	createGame(date, player2, player1Score, player2Score) {
		let player1 = this.auth.getUserDetails()._id;
		this.gameService.createGame(new Date(date), player1, player2, player1Score, player2Score).subscribe(res => console.log(res));
	}

	getOpponents() {
		this.gameService.getUsers().subscribe(users => {
			this.opponents = users;
		});
	}

}
