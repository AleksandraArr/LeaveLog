import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { LeaveRequest } from '../models/leave-request.model';
import { LeaveRequestApiService } from '../services/leave-request-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class GetLeaveRequestByIdResolver implements Resolve<LeaveRequest> {
  constructor(private leaveRequestApiService: LeaveRequestApiService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<LeaveRequest> {
    const id = Number(route.paramMap.get('id'));
    if (!id) throw new Error('No id provided');
    return this.leaveRequestApiService.getById(id);
  }
}
