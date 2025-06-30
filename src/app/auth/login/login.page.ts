import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserErrorCodeToMessage } from 'src/common/models/user.model';
import { AuthService } from 'src/common/services/auth.service';
import { ToastService } from 'src/common/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {}
  public formGroupControls = {
    Email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[^@]+@[^@]+\.[^@]+$/),
    ]),
    Password: new FormControl<string | null>(null, Validators.required),
  };
  public formGroup = new FormGroup(this.formGroupControls);
  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }
  public async onSubmit(): Promise<void> {
    const credentials = {
      Email: this.formGroupControls.Email.value!,
      Password: this.formGroupControls.Password.value!,
    };
    this.authService.login(credentials).subscribe({
      next: () => {
        this.toastService.presentToast('Logged in successfully.', 'success');
        this.router.navigateByUrl('leave-requests');
      },
      error: (err) => {
        const code = err?.error?.Errors?.[0]?.Code;
        const message = UserErrorCodeToMessage(code);
        this.toastService.presentToast(
          `Error while loging in. ${message}`,
          'danger'
        );
      },
    });
  }
}
