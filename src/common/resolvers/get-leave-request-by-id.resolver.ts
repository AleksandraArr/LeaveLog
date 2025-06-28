import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { LeaveRequest, Status } from '../models/leave-request.model';
import { LeaveRequestApiService } from '../services/leave-request-api.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GetLeaveRequestByIdResolver {
  constructor(private leaveRequestApiService: LeaveRequestApiService) {}
  leaveRequests: LeaveRequest[] = [
    new LeaveRequest(
      371,
      1,
      '2023-05-10',
      '2023-05-15',
      'Godišnji odmor',
      'Planiram putovanje',
      Status.Approved,
      5,
      1,
      101
    ),
  ];
  resolve(route: ActivatedRouteSnapshot): Promise<LeaveRequest> {
    return new Promise(async (resolve, reject) => {
      const id = Number(route.paramMap.get('id'));
      const request = this.leaveRequests.find((r) => r.Id === id);
      if (request) {
        resolve(request);
      } else {
        reject(`Leave request with id ${id} not found`);
      }
      // if (route.paramMap.has('id')) {
      //   const id = Number(route.paramMap.get('id'));
      //   // const request = this.leaveRequests.find((r) => r.Id === id);
      //   // if (request) {
      //   //   resolve(request);
      //   // } else {
      //   //   reject(`Leave request with id ${id} not found`);
      //   // }
      //   if (!id) {
      //     return Promise.reject('No id provided');
      //   }

      //   return lastValueFrom(this.leaveRequestApiService.getById(id));
      // } else {
      //   reject('No id provided');
      // }
    });
  }
}
