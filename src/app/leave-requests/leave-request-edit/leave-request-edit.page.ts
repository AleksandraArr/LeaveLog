import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  LeaveRequest,
  Status,
  StatusToString,
} from 'src/common/models/leave-request.model';
import { ConnectedDays, LeaveType } from 'src/common/models/leave-type.model';

@Component({
  selector: 'app-leave-request-edit',
  templateUrl: './leave-request-edit.page.html',
  styleUrls: ['./leave-request-edit.page.scss'],
  standalone: false,
})
export class LeaveRequestEditPage implements OnInit {
  leaveRequest: LeaveRequest = new LeaveRequest();
  leaveTypes: LeaveType[] = [
    new LeaveType(1, 'Sick day', ConnectedDays.SickDay, 0, 2),
    new LeaveType(2, 'Vacation', ConnectedDays.VacationDay, 20, 10),
    new LeaveType(3, 'Personal day', ConnectedDays.VacationDay, 3, 5),
  ];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
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
    return this.formGroup.valid;
  }
  public async onSubmit(): Promise<void> {
    this.leaveRequest.LeaveTypeId = this.formGroupControls.LeaveTypeId.value!;
    this.leaveRequest.Description = this.formGroupControls.Description.value!;
    this.leaveRequest.DateFrom = this.formGroupControls.DateFrom.value!;
    this.leaveRequest.DateTo = this.formGroupControls.DateTo.value!;
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
}
