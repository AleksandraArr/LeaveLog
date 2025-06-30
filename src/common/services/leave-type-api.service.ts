// src/app/services/leave-request.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, map, Observable } from 'rxjs';
import { LeaveType } from '../models/leave-type.model';
import { AuthService } from './auth.service';

export interface ApiResponse<T> {
  Data: T;
  Status: number;
  Errors: string[];
}

@Injectable()
export class LeaveTypeApiService {
  private apiUrl = 'http://localhost:9602/api/v1/LeaveTypes';
  constructor(private http: HttpClient, private authService: AuthService) {}

  // Get all leave types
  async getAll(): Promise<LeaveType[]> {
    const token = await this.authService.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const body = {
      PageSize: 0,
      PageNumber: 0,
      StartIndex: 0,
    };

    const observable = this.http
      .post<{
        Data: { Items: LeaveType[]; TotalItems: number };
        Status: number;
        Errors: any[];
      }>(`${this.apiUrl}/Search`, body, { headers })
      .pipe(map((res) => res.Data.Items));

    return firstValueFrom(observable);
  }
}
