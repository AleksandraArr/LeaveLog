import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserPosition, UserType } from 'src/common/models/user.model';
import { ToastService } from 'src/common/services/toast.service';
import { UserApiService } from 'src/common/services/user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  user: User = new User();
  constructor(
    private userApiService: UserApiService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {}

  public formGroupControls = {
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[^@]+@[^@]+\.[^@]+$/),
    ]),
    UserType: new FormControl<UserType | null>(null, Validators.required),
    UserPosition: new FormControl<UserPosition | null>(
      null,
      Validators.required
    ),
  };
  public formGroup = new FormGroup(this.formGroupControls);
  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }
  public async onSubmit(): Promise<void> {
    this.user.FirstName = this.formGroupControls.FirstName.value!;
    this.user.LastName = this.formGroupControls.LastName.value!;
    this.user.Email = this.formGroupControls.Email.value!;
    this.user.UserPosition = this.formGroupControls.UserPosition.value!;
    this.user.UserType = this.formGroupControls.UserType.value!;
    console.log(this.user);
    try {
      const createdUser = await this.userApiService.create(this.user);
      this.toastService.presentToast(
        'User succesfully created. Please chack your email to verify.',
        'success'
      );
      this.router.navigateByUrl('/auth/login');
    } catch (error) {
      this.toastService.presentToast('Error while creating user.', 'danger');
    }
  }
}
