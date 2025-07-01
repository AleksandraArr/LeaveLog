import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { UserDaysOff } from 'src/common/models/user-days-off.model';
import { User, UserPosition, UserType } from 'src/common/models/user.model';
import { AuthService } from 'src/common/services/auth.service';
import { ToastService } from 'src/common/services/toast.service';
import { UserApiService } from 'src/common/services/user-api.service';
import { UserDaysOffApiService } from 'src/common/services/user-days-off-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  standalone: false,
})
export class ProfilePage {
  user: User = new User();
  userDaysOff: UserDaysOff = new UserDaysOff();
  isLoading = true;
  segment: string = 'info';
  constructor(
    private userApiService: UserApiService,
    private userDaysOffApiService: UserDaysOffApiService,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private loadingCtrl: LoadingController,
    public navCtrl: NavController
  ) {}
  async ngOnInit() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });

    await loading.present();

    try {
      await this.LoadCurrentUser();
      await this.LoadCurrentUserDaysOff();
    } catch (err) {
      this.toastService.presentToast('Failed to load user', 'danger');
    } finally {
      this.isLoading = false;
      await loading.dismiss();
    }
  }
  async LoadCurrentUser() {
    try {
      this.user = await this.userApiService.getCurrentUser();
    } catch (err) {
      this.toastService.presentToast('Error while loading user.', 'danger');
    }
  }
  async LoadCurrentUserDaysOff() {
    try {
      this.userDaysOff = await this.userDaysOffApiService.getCurrentUserDaysOff(
        this.user.Id
      );
    } catch (err) {
      this.toastService.presentToast(
        'Error while loading user days off.',
        'danger'
      );
    }
  }
  async logout() {
    try {
      await this.authService.logout();
      this.toastService.presentToast('Successfuly logged out.', 'success');
      this.router.navigateByUrl('/auth');
    } catch (err) {
      this.toastService.presentToast('Error while loading user.', 'danger');
    }
  }
}
