import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
	game: any = {};
	editGameForm: FormGroup;

	constructor(
		private route: ActivatedRoute,
    	private router: Router,
    	private gameService: GameService,
    	private fb: FormBuilder) { 
		this.createForm();
	}

	ngOnInit() {
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
			this.gameService.updateGame(params['id'], new Date(date), player1, player2, player1Score, player2Score).subscribe(res => console.log(res));
			// this.router.navigate(['games']);
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
