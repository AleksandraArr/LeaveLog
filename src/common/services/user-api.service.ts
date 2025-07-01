// src/app/services/leave-request.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, from, map, Observable, switchMap } from 'rxjs';
import { LeaveRequest, Status } from '../models/leave-request.model';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';

export interface ApiResponse<T> {
  Data: T;
  Status: number;
  Errors: string[];
}

@Injectable()
export class UserApiService {
  private apiUrl = 'http://localhost:9601/api/v1/Users';
  token: string = '';
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.loadToken();
  }
  // Get all users
  async getAll(): Promise<User[]> {
    const token = await this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const body = {
      PageSize: 0,
      PageNumber: 0,
      StartIndex: 0,
    };

    return firstValueFrom(
      this.http
        .post<{
          Data: { Items: User[]; TotalItems: number };
          Status: number;
          Errors: any[];
        }>(`${this.apiUrl}/Search`, body, { headers })
        .pipe(map((res) => res.Data.Items))
    );
  }

  // Get one by ID
  getById(id: number): Observable<LeaveRequest> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.token}`,
    });
    return this.http
      .get<ApiResponse<LeaveRequest>>(`${this.apiUrl}/${id}`, { headers })
      .pipe(map((response) => response.Data));
  }

  //Get current logged in user
  async getCurrentUser(): Promise<User> {
    const token = await this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return firstValueFrom(
      this.http
        .get<ApiResponse<User>>(`${this.apiUrl}/GetCurrentUser`, { headers })
        .pipe(map((res) => res.Data))
    );
  }

  // Create new user
  async create(user: User): Promise<User> {
    const token = await this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return firstValueFrom(
      this.http.post<User>(`${this.apiUrl}/Create`, user, {
        headers,
      })
    );
  }
}
