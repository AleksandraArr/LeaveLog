// src/app/services/leave-request.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, from, map, Observable, switchMap } from 'rxjs';
import { LeaveRequest, Status } from '../models/leave-request.model';
import { AuthService } from './auth.service';
import { UserApiService } from './user-api.service';

export interface ILeaveRequest {
  Id?: number;
  LeaveTypeId: number;
  CreatedBy: number;
  UpdatedBy: number;
  DateFrom: string;
  DateTo: string;
  Description: string;
  Comment?: string;
  DayCount?: number;
  Status: Status;
}
export interface ApiResponse<T> {
  Data: T;
  Status: number;
  Errors: string[];
}

@Injectable()
export class LeaveRequestApiService {
  private apiUrl = 'http://localhost:9602/api/v1/LeaveRequests';
  token: string = '';
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private userApiService: UserApiService
  ) {
    this.authService.loadToken();
  }
  // Get all leave requests
  async getAll(): Promise<LeaveRequest[]> {
    const token = await this.authService.getToken();
    const user = await this.userApiService.getCurrentUser();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    const body = {
      PageSize: 0,
      PageNumber: 0,
      StartIndex: 0,
      Filters: [
        {
          Op: 1,
          Field: 'CreatedBy',
          Value: user.Id,
        },
      ],
    };

    return firstValueFrom(
      this.http
        .post<{
          Data: { Items: LeaveRequest[]; TotalItems: number };
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

  // Create new leave request
  async create(request: LeaveRequest): Promise<LeaveRequest> {
    const token = await this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return firstValueFrom(
      this.http.post<LeaveRequest>(`${this.apiUrl}/Create`, request, {
        headers,
      })
    );
  }

  // Update leave request
  async update(request: LeaveRequest): Promise<LeaveRequest> {
    const token = await this.authService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return firstValueFrom(
      this.http.post<LeaveRequest>(`${this.apiUrl}/Update`, request, {
        headers,
      })
    );
  }

  // Delete leave request
  delete(id: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.token}`,
    });
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
}
