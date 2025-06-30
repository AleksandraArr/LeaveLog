import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveRequest } from 'src/common/models/leave-request.model';
import { LeaveType } from 'src/common/models/leave-type.model';
import { User } from 'src/common/models/user.model';
import { LeaveRequestApiService } from 'src/common/services/leave-request-api.service';
import { ToastService } from 'src/common/services/toast.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss'],
  standalone: false,
})
export class LeaveRequestComponent {
  @Input() leaveRequest: LeaveRequest = new LeaveRequest();
  @Input() leaveTypes: LeaveType[] = [];
  @Input() users: User[] = [];
  constructor(
    private leaveRequestApiService: LeaveRequestApiService,
    private toastService: ToastService,
    private router: Router
  ) {}
  onClick() {
    this.router.navigateByUrl('/leave-requests/' + this.leaveRequest.Id);
  }
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
}
