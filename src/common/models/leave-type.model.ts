export enum ConnectedDays {
  None,
  SickDay,
  VacationDay,
  BonusDay,
}

export function ConnectedDaysToString(value: ConnectedDays): string {
  switch (value) {
    case ConnectedDays.None:
      return 'None';
    case ConnectedDays.SickDay:
      return 'Sick day';
    case ConnectedDays.VacationDay:
      return 'Vacation dan';
    case ConnectedDays.BonusDay:
      return 'Bonus dan';
    default:
      return 'Uknown day';
  }
}
export class LeaveType {
  Id: number;
  Name: string;
  ConnectedTo: ConnectedDays;
  DaysUpfront: number;
  MaximumDays: number;

  constructor(
    id: number = 0,
    name: string = '',
    connectedTo: ConnectedDays = ConnectedDays.None,
    daysUpfront: number = 0,
    maximumDays: number = 0
  ) {
    this.Id = id;
    this.Name = name;
    this.ConnectedTo = connectedTo;
    this.DaysUpfront = daysUpfront;
    this.MaximumDays = maximumDays;
  }
}
