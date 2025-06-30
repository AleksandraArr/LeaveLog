import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/common/services/auth.service';
import { ToastService } from 'src/common/services/toast.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.page.html',
  styleUrls: ['./set-password.page.scss'],
  standalone: false,
})
export class SetPasswordPage implements OnInit {
  email: string = '';
  token: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.email = params.get('email') || '';
      this.token = params.get('token') || '';
    });
  }
  public formGroupControls = {
    Password: new FormControl<string | null>(null, Validators.required),
    ConfirmPassword: new FormControl<string | null>(null, Validators.required),
  };
  public formGroup = new FormGroup(this.formGroupControls);
  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }
  public async onSubmit(): Promise<void> {
    const data = {
      Email: this.email,
      Password: this.formGroupControls.Password.value!,
      Token: this.token,
    };
    try {
      const result = await this.authService.setPassword(data);
      this.toastService.presentToast('Registration confirmed!', 'success');
      this.router.navigateByUrl('auth/login');
    } catch (err) {
      this.toastService.presentToast(
        'Error confirming registration.',
        'danger'
      );
    }
  }
}
