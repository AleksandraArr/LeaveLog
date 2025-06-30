import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  LeaveErrorCodeToMessage,
  LeaveRequest,
} from 'src/common/models/leave-request.model';
import { LeaveType } from 'src/common/models/leave-type.model';
import { LeaveRequestApiService } from 'src/common/services/leave-request-api.service';
import { LeaveTypeApiService } from 'src/common/services/leave-type-api.service';
import { ToastService } from 'src/common/services/toast.service';

@Component({
  selector: 'app-add-leave-request',
  templateUrl: './add-leave-request.page.html',
  styleUrls: ['./add-leave-request.page.scss'],
  standalone: false,
})
export class AddLeaveRequestPage implements OnInit {
  leaveRequest: LeaveRequest = new LeaveRequest();
  leaveTypes: LeaveType[] = [];
  public formGroupControls = {
    LeaveTypeId: new FormControl<number | null>(null, Validators.required),
    Description: new FormControl<string | null>(null, Validators.required),
    DateFrom: new FormControl<string | null>(null, Validators.required),
    DateTo: new FormControl<string | null>(null, Validators.required),
  };
  public formGroup = new FormGroup(this.formGroupControls);
  constructor(
    private leaveRequestApiService: LeaveRequestApiService,
    private leaveTypeApiService: LeaveTypeApiService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.loadLeaveTypes();
  }
  async loadLeaveTypes() {
    try {
      const leaveTypes = await this.leaveTypeApiService.getAll();
      this.leaveTypes = leaveTypes;
    } catch (error) {
      console.error('Error loading leave types', error);
    }
  }
  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }
  public async onSubmit(): Promise<void> {
    this.leaveRequest.LeaveTypeId = this.formGroupControls.LeaveTypeId.value!;
    this.leaveRequest.Description = this.formGroupControls.Description.value!;
    this.leaveRequest.DateFrom = this.formGroupControls.DateFrom.value!;
    this.leaveRequest.DateTo = this.formGroupControls.DateTo.value!;
    try {
      const createdRequest = await this.leaveRequestApiService.create(
        this.leaveRequest
      );
      this.toastService.presentToast(
        'Leave request succesfully created',
        'success'
      );
    } catch (err: any) {
      const code = err?.error?.Errors?.[0]?.Code;
      const message = LeaveErrorCodeToMessage(code);
      this.toastService.presentToast(
        `Error while creating leave request. ${message}`,
        'danger'
      );
    }
  }
}
