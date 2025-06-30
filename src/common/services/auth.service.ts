import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  firstValueFrom,
  from,
  map,
  Observable,
  switchMap,
  tap,
} from 'rxjs';
import { Preferences } from '@capacitor/preferences';
const ACCESS_TOKEN = 'my-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  token = '';

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  async loadToken() {
    const { value } = await Preferences.get({ key: ACCESS_TOKEN });
    if (value) {
      console.log('set token: ', value);
      this.token = value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }
  async getToken(): Promise<string> {
    if (!this.token) {
      await this.loadToken();
    }
    return this.token;
  }

  login(credentials: { Email: string; Password: string }): Observable<any> {
    const payload = {
      ...credentials,
      ClientId: 'webapp_admin',
    };
    return this.http
      .post(`http://localhost:9601/api/v1/Login/LoginEmailPassword2FA`, payload)
      .pipe(
        map((data: any) => data.Data.Tokens.access_token),
        switchMap((token) => {
          this.token = token;
          return from(Preferences.set({ key: ACCESS_TOKEN, value: token }));
        }),
        tap(() => {
          this.isAuthenticated.next(true);
        })
      );
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    this.token = '';
    return Preferences.remove({ key: ACCESS_TOKEN });
  }
  setPassword(data: {
    Email: string;
    Password: string;
    Token: string;
  }): Promise<any> {
    return firstValueFrom(
      this.http.post(
        `http://localhost:9601/api/v1/UserClaims/SetupPassword`,
        data
      )
    );
  }
}
