import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class GameService {
	constructor(private http: Http) { }

	getGames() {
		return this.http.get(environment.apiURL + "games", ).map((res:Response) => res.json());	
	}

}
