import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserPosition, UserType } from 'src/common/models/user.model';
import { ToastService } from 'src/common/services/toast.service';
import { UserApiService } from 'src/common/services/user-api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
  standalone: false,
})
export class AddUserPage implements OnInit {
  user: User = new User();

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
  constructor(
    private userApiService: UserApiService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

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
      this.toastService.presentToast('User succesfully created.', 'success');
    } catch (error) {
      this.toastService.presentToast('Error while creating user.', 'danger');
    }
  }
}
