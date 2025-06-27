import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { LeaveRequest, Status } from '../models/leave-request.model';

@Injectable()
export class GetLeaveRequestByIdResolver {
  leaveRequests: LeaveRequest[] = [
    new LeaveRequest(
      1,
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
    new LeaveRequest(
      2,
      2,
      '2023-06-01',
      '2023-06-03',
      'Bolovanje',
      'Prehlada',
      Status.Pending,
      2,
      2,
      102
    ),
    new LeaveRequest(
      3,
      1,
      '2023-07-20',
      '2023-07-25',
      'Odmor',
      'Porodične obaveze',
      Status.Rejected,
      5,
      3,
      103
    ),
  ];
  constructor() {}
  resolve(route: ActivatedRouteSnapshot): Promise<LeaveRequest> {
    return new Promise(async (resolve, reject) => {
      if (route.paramMap.has('id')) {
        const id = Number(route.paramMap.get('id'));
        const request = this.leaveRequests.find((r) => r.Id === id);
        if (request) {
          resolve(request);
        } else {
          reject(`Leave request with id ${id} not found`);
        }
      } else {
        reject('No id provided');
      }
    });
  }
}
