import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveRequest } from 'src/common/models/leave-request.model';
import { ConnectedDays, LeaveType } from 'src/common/models/leave-type.model';

@Component({
  selector: 'app-add-leave-request',
  templateUrl: './add-leave-request.page.html',
  styleUrls: ['./add-leave-request.page.scss'],
  standalone: false,
})
export class AddLeaveRequestPage implements OnInit {
  leaveRequest: LeaveRequest = new LeaveRequest();
  leaveTypes: LeaveType[] = [
    new LeaveType(1, 'Sick day', ConnectedDays.SickDay, 0, 2),
    new LeaveType(2, 'Vacation', ConnectedDays.VacationDay, 20, 10),
    new LeaveType(3, 'Personal day', ConnectedDays.VacationDay, 3, 5),
  ];
  public formGroupControls = {
    LeaveTypeId: new FormControl<number | null>(null, Validators.required),
    Description: new FormControl<string | null>(null, Validators.required),
    DateFrom: new FormControl<string | null>(null, Validators.required),
    DateTo: new FormControl<string | null>(null, Validators.required),
  };
  public formGroup = new FormGroup(this.formGroupControls);
  constructor() {}

  ngOnInit() {}

  public get canSubmit(): boolean {
    return this.formGroup.valid;
  }
  public async onSubmit(): Promise<void> {
    this.leaveRequest.LeaveTypeId = this.formGroupControls.LeaveTypeId.value!;
    this.leaveRequest.Description = this.formGroupControls.Description.value!;
    this.leaveRequest.DateFrom = this.formGroupControls.DateFrom.value!;
    this.leaveRequest.DateTo = this.formGroupControls.DateTo.value!;
    console.log(this.leaveRequest);
  }
}
