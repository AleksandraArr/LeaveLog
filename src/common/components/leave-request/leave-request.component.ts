import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeaveRequest } from 'src/common/models/leave-request.model';
import { LeaveType } from 'src/common/models/leave-type.model';
import { User } from 'src/common/models/user.model';
import { LeaveRequestApiService } from 'src/common/services/leave-request-api.service';
import { LeaveTypeApiService } from 'src/common/services/leave-type-api.service';
import { ToastService } from 'src/common/services/toast.service';
import { UserApiService } from 'src/common/services/user-api.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss'],
  standalone: false,
})
export class LeaveRequestComponent {
  @Input() leaveRequest: LeaveRequest = new LeaveRequest();
  @Output() clicked = new EventEmitter<number>();
  constructor(
    private leaveRequestApiService: LeaveRequestApiService,
    private leaveTypeApiService: LeaveTypeApiService,
    private userApiService: UserApiService,
    private toastService: ToastService
  ) {
    this.loadLeaveTypes();
    this.loadUsers();
  }
  onClick() {
    this.clicked.emit(this.leaveRequest.Id);
  }
  leaveTypes: LeaveType[] = [];
  users: User[] = [];
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.onConfirmDelete();
      },
    },
  ];
  onConfirmDelete() {
    this.leaveRequestApiService.delete(this.leaveRequest.Id).subscribe({
      next: () => {
        this.toastService.presentToast(
          'Leave request deleted successfully.',
          'success'
        );
      },
      error: (err) => {
        this.toastService.presentToast(
          'Error while deleting eave request',
          'danger'
        );
      },
    });
  }
  async loadLeaveTypes() {
    try {
      const leaveTypes = await this.leaveTypeApiService.getAll();
      this.leaveTypes = leaveTypes;
    } catch (error) {
      console.error('Error loading leave types', error);
    }
  }
  async loadUsers() {
    try {
      const users = await this.userApiService.getAll();
      this.users = users;
    } catch (error) {
      console.error('Error loading users', error);
    }
  }
}
