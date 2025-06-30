import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { User, UserPosition, UserType } from 'src/common/models/user.model';
import { LeaveRequestApiService } from 'src/common/services/leave-request-api.service';
import { LeaveTypeApiService } from 'src/common/services/leave-type-api.service';
import { ToastService } from 'src/common/services/toast.service';
import { UserApiService } from 'src/common/services/user-api.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
  standalone: false,
})
export class UsersPage implements OnInit {
  users: User[] = [];
  constructor(
    private userApiService: UserApiService,
    private toastService: ToastService,
    private loadingCtrl: LoadingController
  ) {}
  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    try {
      await this.loadUsers();
    } catch (err) {
      this.toastService.presentToast('Failed to load users', 'danger');
    } finally {
      await loading.dismiss();
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
      this.loadUsers();
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }
}
