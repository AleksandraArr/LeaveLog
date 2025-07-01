// src/app/services/leave-request.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import { AuthService } from './auth.service';
import { UserDaysOff } from '../models/user-days-off.model';

export interface ApiResponse<T> {
  Data: T;
  Status: number;
  Errors: string[];
}

@Injectable()
export class UserDaysOffApiService {
  private apiUrl = 'http://localhost:9602/api/v1/UserDaysOffs';
  token: string = '';
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.loadToken();
  }

  //Get current logged in user days off
  async getCurrentUserDaysOff(userId: number): Promise<UserDaysOff> {
    const token = await this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return firstValueFrom(
      this.http
        .get<ApiResponse<UserDaysOff>>(`${this.apiUrl}/GetByUserId/${userId}`, {
          headers,
        })
        .pipe(map((res) => res.Data))
    );
  }
}
