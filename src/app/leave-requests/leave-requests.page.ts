import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveRequest, Status } from 'src/common/models/leave-request.model';

@Component({
  selector: 'app-leave-requests',
  templateUrl: 'leave-requests.page.html',
  styleUrls: ['leave-requests.page.scss'],
  standalone: false,
})
export class LeaveRequestsPage {
  private router = inject(Router);
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
    new LeaveRequest(
      372,
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
      373,
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
  navigateToRequest(id: number) {
    this.router.navigate(['leave-requests', id]);
  }
}
