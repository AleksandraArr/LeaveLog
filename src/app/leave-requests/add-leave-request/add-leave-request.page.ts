import { Component, OnInit } from '@angular/core';
import { ConnectedDays, LeaveType } from 'src/common/models/leave-type.model';

@Component({
  selector: 'app-add-leave-request',
  templateUrl: './add-leave-request.page.html',
  styleUrls: ['./add-leave-request.page.scss'],
  standalone: false,
})
export class AddLeaveRequestPage implements OnInit {
  leaveTypes: LeaveType[] = [
    new LeaveType(1, 'Sick day', ConnectedDays.SickDay, 0, 2),
    new LeaveType(2, 'Vacation', ConnectedDays.VacationDay, 20, 10),
    new LeaveType(3, 'Personal day', ConnectedDays.VacationDay, 3, 5),
  ];
  constructor() {}

  ngOnInit() {}
}
