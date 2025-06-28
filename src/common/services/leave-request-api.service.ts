// src/app/services/leave-request.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../models/leave-request.model';

export interface LeaveRequest {
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

@Injectable()
export class LeaveRequestApiService {
  private apiUrl = '/people/LeaveRequests';

  constructor(private http: HttpClient) {}

  // Get all leave requests
  getAll(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.apiUrl);
  }

  // Get one by ID
  getById(id: number): Observable<LeaveRequest> {
    const headers = new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkE5MkQ0NTkwMEFCM0ZCQzczMDY3NEIwNTcwQjAzNERDN0E3MTEyMzhSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InFTMUZrQXF6LThjd1owc0ZjTEEwM0hweEVqZyJ9.eyJuYmYiOjE3NTExMDYzMDgsImV4cCI6MTc1MTEwOTkwOCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5NjAxIiwiYXVkIjpbIklkZW50aXR5U2VydmVyQXBpIiwiUGVvcGxlQ29tcGxpYW5jZSIsImh0dHA6Ly9sb2NhbGhvc3Q6OTYwMS9yZXNvdXJjZXMiXSwiY2xpZW50X2lkIjoid2ViYXBwX2FkbWluIiwic3ViIjoiMjExIiwiYXV0aF90aW1lIjoxNzUxMTA2MzA4LCJpZHAiOiJsb2NhbCIsInByZWZlcnJlZF91c2VybmFtZSI6ImFsZWtzYW5kcmEucmFrb3ZpYzIxQGdtYWlsLmNvbSIsImVtYWlsIjoiYWxla3NhbmRyYS5yYWtvdmljMjFAZ21haWwuY29tIiwianRpIjoiMzk3REYxNzEyMzVGRjhGNjA0RDUyMzQ0NkM1MzQyQTIiLCJpYXQiOjE3NTExMDYzMDgsInVzZXJUeXBlIjoiMSIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJJZGVudGl0eVNlcnZlckFwaSIsIlBlb3BsZUNvbXBsaWFuY2UiXSwiYW1yIjpbImVtYWlsX3Bhc3N3b3JkXzJmYSJdfQ.QUPXbBxDia8r42XNBAhdeukzs8NDYPOpGeqy-paBAPxbkxCS7NMVXurmhHdlj9CChOB_iOef_QDyqZbiEoogUNMyiGh4H8RK6DO3xXVXkcT7Qm-Iyv9YGrbdbM7tiAXCLL4LvzXkmZ_gWYSZAsSRWMhvDtTipjr4i8edeCs44BXPXGby7jM2X3gzqbex_wEumy0pdO5Q1vRYKd5k14HDy8MCFGP9lnrb_OKro3dxfoZW3GlbZvlIE0Am4S-3YWT4HHmjaNHIxTtiLw6_xLdqpyrmX4xw1c3SyGSParFi8WUy99Ud8LLRcEUhi9hhQea686telVIXvFM8AkwsQfubEg`,
    });
    return this.http.get<LeaveRequest>(`${this.apiUrl}/${id}`, { headers });
  }

  // Create new leave request
  create(request: LeaveRequest): Observable<LeaveRequest> {
    return this.http.post<LeaveRequest>(this.apiUrl, request);
  }

  // Update leave request
  update(id: number, request: LeaveRequest): Observable<LeaveRequest> {
    return this.http.put<LeaveRequest>(`${this.apiUrl}/${id}`, request);
  }

  // Delete leave request
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
