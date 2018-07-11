import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
	game: any = {};
	editGameForm: FormGroup;
	opponents: any;

	constructor(
		private route: ActivatedRoute,
    	private router: Router,
    	private auth: AuthenticationService,
    	private gameService: GameService,
    	private fb: FormBuilder) { 
		this.createForm();
	}

	ngOnInit() {
		this.getOpponents();
		this.route.params.subscribe(params => {
	        this.gameService.getGame(params['id']).subscribe(res => {
	        	console.log(res)
	          this.game = res;
	          this.game.date = this.formatDate(this.game.date);
	      });
	    });
	}

	createForm() {
		this.editGameForm = this.fb.group({
			date: ['', Validators.required ],
			player1: ['', Validators.required ],
			player2: ['', Validators.required ],
			player1Score: ['', Validators.required ],
			player2Score: ['', Validators.required ]

		});
	}

	updateGame(date, player1, player2, player1Score, player2Score) {
		this.route.params.subscribe(params => {
			let player1 = this.auth.getUserDetails();
			player2 = JSON.parse(player2);			
			this.gameService.updateGame(params['id'], new Date(date), player1._id, player1.name, player2._id, player2.name, player1Score, player2Score).subscribe(res => console.log(res));
			// this.router.navigate(['games']);
		});
		
	}

	getOpponents() {
		this.gameService.getUsers().subscribe(users => {
			this.opponents = users;
		});
	}

	formatDate(date) {
	    let d = new Date(date),
	        month = '' + (d.getMonth() + 1),
	        day = '' + d.getDate(),
	        year = d.getFullYear();

	    if (month.length < 2) month = '0' + month;
	    if (day.length < 2) day = '0' + day;

	    return [year, month, day].join('-');
	}

}
