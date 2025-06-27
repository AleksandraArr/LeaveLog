import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeaveRequest } from 'src/common/models/leave-request.model';
import { ConnectedDays, LeaveType } from 'src/common/models/leave-type.model';
import { User, UserPosition, UserType } from 'src/common/models/user.model';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss'],
  standalone: false,
})
export class LeaveRequestComponent {
  @Input() leaveRequest: LeaveRequest = new LeaveRequest();
  @Output() clicked = new EventEmitter<number>();

  onClick() {
    this.clicked.emit(this.leaveRequest.Id);
  }
  leaveTypes: LeaveType[] = [
    new LeaveType(1, 'Sick day', ConnectedDays.SickDay, 0, 2),
    new LeaveType(2, 'Vacation', ConnectedDays.VacationDay, 20, 10),
    new LeaveType(3, 'Personal day', ConnectedDays.VacationDay, 3, 5),
  ];
  users: User[] = [
    new User(
      1,
      'Aleksandra',
      'Rakovic',
      'aleksandra.rakovic21@gmail.com',
      UserType.Admin,
      UserPosition.ProjectManager
    ),
    new User(
      2,
      'Lucas',
      'van der Vat',
      'lucasvdvat@gmail.com',
      UserType.User,
      UserPosition.CEO
    ),
    new User(
      3,
      'Milena',
      'Sretenovic',
      'ms2021@gmail.com',
      UserType.User,
      UserPosition.CEO
    ),
  ];
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
    },
  ];
}
