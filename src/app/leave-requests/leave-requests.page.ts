import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveRequest, Status } from 'src/common/models/leave-request.model';
import { User } from 'src/common/models/user.model';
import { LeaveRequestApiService } from 'src/common/services/leave-request-api.service';
import { UserApiService } from 'src/common/services/user-api.service';

@Component({
  selector: 'app-leave-requests',
  templateUrl: 'leave-requests.page.html',
  styleUrls: ['leave-requests.page.scss'],
  standalone: false,
})
export class LeaveRequestsPage implements OnInit {
  private router = inject(Router);
  leaveRequests: LeaveRequest[] = [];
  user: User = new User();
  constructor(
    private leaveRequestApiService: LeaveRequestApiService,
    private userApiService: UserApiService
  ) {}
  ngOnInit() {
    this.loadLeaveRequests();
  }
  async loadLeaveRequests() {
    try {
      this.leaveRequests = await this.leaveRequestApiService.getAll();
    } catch (err) {
      console.error('Error while loading leave requests', err);
    }
  }
  async loadCurrentUser() {
    try {
      this.user = await this.userApiService.getCurrentUser();

      console.log(this.user);
    } catch (err) {
      console.error('Error while loading leave requests', err);
    }
  }
  navigateToRequest(id: number) {
    this.router.navigate(['leave-requests', id]);
  }
}
