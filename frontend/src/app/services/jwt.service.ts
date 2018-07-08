import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getAccessToken(): String {
    return window.localStorage['accessToken'];
  }

  saveAccessToken(token: String) {
    window.localStorage['accessToken'] = token;
  }

  saveRefreshToken(token: String) {
    window.localStorage['refreshToken'] = token;
  }

  destroyToken() {
    window.localStorage.clear();
  }

}
