import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class GameService {
	constructor(private http: Http) { }

	getGames() {
		return this.http.get(`${environment.apiURL}/games`, ).map((res:Response) => res.json());	
	}

	getGame(id) {
		return this.http.get(`${environment.apiURL}/games/${id}`, ).map((res:Response) => res.json());	
	}

	createGame(params) {
		return this.http.post(`${environment.apiURL}/games/create`, params).map((res:Response) => res.json());	
	}

	editGame(id, params) {
		return this.http.put(`${environment.apiURL}/games/${id}`, params).map((res:Response) => res.json());	
	}

	deleteGame(id) {
		return this.http.delete(`${environment.apiURL}/games/${id}`).map((res:Response) => res.json());	
	}	
}
