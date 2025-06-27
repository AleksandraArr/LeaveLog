export enum Status {
  None,
  Pending,
  Approved,
  Rejected,
}

export function StatusToString(value: Status): string {
  switch (value) {
    case Status.None:
      return 'Nista';
    case Status.Pending:
      return 'Pending';
    case Status.Approved:
      return 'Approved';
    case Status.Rejected:
      return 'Rejected';
    default:
      return 'Uknown status';
  }
}
export class LeaveRequest {
  Id: number;
  LeaveTypeId: number;
  DateFrom: string;
  DateTo: string;
  Description: string;
  Comment: string;
  Status: Status;
  DayCount: number;
  CreatedBy: number;
  UpdatedBy: number;
  constructor(
    id: number = 0,
    leaveTypeId: number = 0,
    dateFrom: string = new Date().toISOString(),
    dateTo: string = new Date().toISOString(),
    description: string = '',
    comment: string = '',
    status: Status = Status.Pending,
    dayCount: number = 0,
    createdBy: number = 0,
    updatedBy: number = 0
  ) {
    this.Id = id;
    this.LeaveTypeId = leaveTypeId;
    this.DateFrom = dateFrom;
    this.DateTo = dateTo;
    this.Description = description;
    this.Comment = comment;
    this.Status = status;
    this.DayCount = dayCount;
    this.CreatedBy = createdBy;
    this.UpdatedBy = updatedBy;
  }
}
