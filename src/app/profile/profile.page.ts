import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserPosition, UserType } from 'src/common/models/user.model';
import { AuthService } from 'src/common/services/auth.service';
import { ToastService } from 'src/common/services/toast.service';
import { UserApiService } from 'src/common/services/user-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  standalone: false,
})
export class ProfilePage {
  user: User = new User();
  constructor(
    private userApiService: UserApiService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.LoadCurrentUser();
  }

  async LoadCurrentUser() {
    try {
      this.user = await this.userApiService.getCurrentUser();
      console.log(this.user);
    } catch (err) {
      this.toastService.presentToast('Error while loading user.', 'danger');
    }
  }
  async logout() {
    try {
      await this.authService.logout();
      this.toastService.presentToast('Successfuly logged out.', 'success');
      this.router.navigateByUrl('/auth/login');
    } catch (err) {
      this.toastService.presentToast('Error while loading user.', 'danger');
    }
  }
}
