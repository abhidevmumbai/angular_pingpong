import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable()
export class GameService {
	constructor(private http: HttpClient) { }

	getGames() {
		return this.http.get(`${environment.apiURL}/games`);	
	}

	// getGame(id) {
	// 	return this.http.get(`${environment.apiURL}/games/${id}`, ).map((res:Response) => res.json());	
	// }

	// createGame(params) {
	// 	return this.http.post(`${environment.apiURL}/games/create`, params).map((res:Response) => res.json());	
	// }

	// editGame(id, params) {
	// 	return this.http.put(`${environment.apiURL}/games/${id}`, params).map((res:Response) => res.json());	
	// }

	// deleteGame(id) {
	// 	return this.http.delete(`${environment.apiURL}/games/${id}`).map((res:Response) => res.json());	
	// }	
}
