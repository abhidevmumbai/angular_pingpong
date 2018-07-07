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

	// getGame(id) {
	// 	return this.http.get(`${environment.apiURL}/games/${id}`, ).map((res:Response) => res.json());	
	// }

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

	// editGame(id, params) {
	// 	return this.http.put(`${environment.apiURL}/games/${id}`, params).map((res:Response) => res.json());	
	// }

	// deleteGame(id) {
	// 	return this.http.delete(`${environment.apiURL}/games/${id}`).map((res:Response) => res.json());	
	// }	
}
