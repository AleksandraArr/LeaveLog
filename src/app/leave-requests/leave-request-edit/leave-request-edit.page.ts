import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaveRequest } from 'src/common/models/leave-request.model';
import { ConnectedDays, LeaveType } from 'src/common/models/leave-type.model';

@Component({
  selector: 'app-leave-request-edit',
  templateUrl: './leave-request-edit.page.html',
  styleUrls: ['./leave-request-edit.page.scss'],
  standalone: false,
})
export class LeaveRequestEditPage implements OnInit {
  leaveRequest: LeaveRequest = new LeaveRequest();
  leaveTypes: LeaveType[] = [
    new LeaveType(1, 'Sick day', ConnectedDays.SickDay, 0, 2),
    new LeaveType(2, 'Vacation', ConnectedDays.VacationDay, 20, 10),
    new LeaveType(3, 'Personal day', ConnectedDays.VacationDay, 3, 5),
  ];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.leaveRequest = data['leaveRequest'] as LeaveRequest;
    });
  }
}
