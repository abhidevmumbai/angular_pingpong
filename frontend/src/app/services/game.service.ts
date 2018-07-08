import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../games/game';
import { environment } from '../../environments/environment';

@Injectable()
export class GameService {
	constructor(private http: HttpClient) { }

	getGames() {
		return this.http.get<Game[]>(`${environment.apiURL}/games`);
	}

	getGamesByUser(userId) {
		return this.http.get<Game[]>(`${environment.apiURL}/games/user/${userId}`);
	}

	getGame(id) {
		return this.http.get(`${environment.apiURL}/games/${id}`);	
	}

	getUsers() {
		return this.http.get(`${environment.apiURL}/games/users`);	
	}

	createGame(date, player1, player2, player1Score, player2Score) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/x-www-form-urlencoded'
				// 'Authorization': 'my-auth-token'
			})
		};
		const params = {
			date: date,
			player1: player1,
			player2: player2,
			player1Score: player1Score,
			player2Score: player2Score
		};
		return this.http.post<Game[]>(`${environment.apiURL}/games/create`, params);
	}

	updateGame(id, date, player1, player2, player1Score, player2Score) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/x-www-form-urlencoded'
				// 'Authorization': 'my-auth-token'
			})
		};
		const params = {
			date: date,
			player1: player1,
			player2: player2,
			player1Score: player1Score,
			player2Score: player2Score
		};
		return this.http.put<Game[]>(`${environment.apiURL}/games/${id}`, params);
	}

	deleteGame(id) {
		return this.http.delete(`${environment.apiURL}/games/${id}`);	
	}
}
