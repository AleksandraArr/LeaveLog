import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LeaveRequest, Status } from 'src/common/models/leave-request.model';
import { LeaveType } from 'src/common/models/leave-type.model';
import { User } from 'src/common/models/user.model';
import { LeaveRequestApiService } from 'src/common/services/leave-request-api.service';
import { LeaveTypeApiService } from 'src/common/services/leave-type-api.service';
import { ToastService } from 'src/common/services/toast.service';
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
  leaveTypes: LeaveType[] = [];
  users: User[] = [];
  constructor(
    private leaveRequestApiService: LeaveRequestApiService,
    private leaveTypeApiService: LeaveTypeApiService,
    private userApiService: UserApiService,
    private loadingCtrl: LoadingController,
    private toastService: ToastService
  ) {}
  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    try {
      await Promise.all([
        this.loadUsers(),
        this.loadLeaveRequests(),
        this.loadLeaveTypes(),
      ]);
    } catch (err) {
      this.toastService.presentToast('Failed to load users', 'danger');
    } finally {
      await loading.dismiss();
    }
  }
  async loadLeaveRequests() {
    try {
      this.leaveRequests = await this.leaveRequestApiService.getAll();
    } catch (err) {
      console.error('Error while loading leave requests.', err);
    }
  }
  async loadCurrentUser() {
    try {
      this.user = await this.userApiService.getCurrentUser();
    } catch (err) {
      console.error('Error while loading current user.', err);
    }
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
  handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      this.loadLeaveRequests();
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }
}
