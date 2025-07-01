import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  LeaveErrorCodeToMessage,
  LeaveRequest,
  Status,
  StatusToString,
} from 'src/common/models/leave-request.model';
import { ConnectedDays, LeaveType } from 'src/common/models/leave-type.model';
import { LeaveRequestApiService } from 'src/common/services/leave-request-api.service';
import { LeaveTypeApiService } from 'src/common/services/leave-type-api.service';
import { ToastService } from 'src/common/services/toast.service';

@Component({
  selector: 'app-leave-request-edit',
  templateUrl: './leave-request-edit.page.html',
  styleUrls: ['./leave-request-edit.page.scss'],
  standalone: false,
})
export class LeaveRequestEditPage implements OnInit {
  leaveRequest: LeaveRequest = new LeaveRequest();
  leaveTypes: LeaveType[] = [];
  isLoading = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private leaveTypeApiService: LeaveTypeApiService,
    private leaveRequestApiService: LeaveRequestApiService,
    private toastService: ToastService
  ) {
    this.loadLeaveTypes();
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(() => {
      this.hasFormChanged;
      this.canSubmit;
    });
  }
  ngAfterViewInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.leaveRequest = data['leaveRequest'] as LeaveRequest;
      this.initForm();
    });
  }
  public formGroupControls = {
    LeaveTypeId: new FormControl<number | null>(null, Validators.required),
    Description: new FormControl<string | null>(null, Validators.required),
    DateFrom: new FormControl<string | null>(null, Validators.required),
    DateTo: new FormControl<string | null>(null, Validators.required),
  };
  public formGroup = new FormGroup(this.formGroupControls);

  public get canSubmit(): boolean {
    return this.formGroup.valid && this.hasFormChanged;
  }
  private get hasFormChanged(): boolean {
    return (
      this.leaveRequest.LeaveTypeId !==
        this.formGroupControls.LeaveTypeId.value ||
      this.leaveRequest.DateFrom !== this.formGroupControls.DateFrom.value ||
      this.leaveRequest.DateTo !== this.formGroupControls.DateTo.value ||
      this.leaveRequest.Description !== this.formGroupControls.Description.value
    );
  }
  public async onSubmit(): Promise<void> {
    this.isLoading = true;
    this.leaveRequest.LeaveTypeId = this.formGroupControls.LeaveTypeId.value!;
    this.leaveRequest.Description = this.formGroupControls.Description.value!;
    this.leaveRequest.DateFrom = this.formGroupControls.DateFrom.value!;
    this.leaveRequest.DateTo = this.formGroupControls.DateTo.value!;
    try {
      const createdRequest = await this.leaveRequestApiService.update(
        this.leaveRequest
      );
      this.toastService.presentToast(
        'Leave request succesfully created',
        'success'
      );

      this.isLoading = false;
    } catch (err: any) {
      this.isLoading = false;
      const code = err?.error?.Errors?.[0]?.Code;
      const message = LeaveErrorCodeToMessage(code);
      this.toastService.presentToast(
        `Error while creating leave request. ${message}`,
        'danger'
      );
    }
  }
  private initForm(): void {
    if (this.leaveRequest) {
      this.formGroupControls.LeaveTypeId.setValue(
        this.leaveRequest.LeaveTypeId
      );
      this.formGroupControls.DateFrom.setValue(this.leaveRequest.DateFrom);
      this.formGroupControls.Description.setValue(
        this.leaveRequest.Description
      );
      this.formGroupControls.DateTo.setValue(this.leaveRequest.DateTo);
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
}
