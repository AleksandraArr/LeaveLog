import { Pipe, PipeTransform } from '@angular/core';
import { LeaveType } from '../models/leave-type.model';

@Pipe({
  name: 'leaveTypeName',
  standalone: false,
})
export class LeaveTypeNamePipe implements PipeTransform {
  transform(leaveTypes: LeaveType[], id: number): string {
    const leaveType = leaveTypes.find((type) => type.Id === id);
    return leaveType ? leaveType.Name : 'Unknown type';
  }
}
