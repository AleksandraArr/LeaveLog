import { NgModule } from '@angular/core';
import { UserTypeToStringPipe } from './user-type-to-string.pipe';
import { UserPositionToStringPipe } from './user-position-to-string.pipe';
import { GetInitialsPipe } from './get-initials.pipe';
import { LeaveTypeNamePipe } from './leave-type-name.pipe';
import { UserFullNamePipe } from './user-fullname.pipe';
import { LeaveRequestStatusToStringPipe } from './leave-request-status-to-string.pipe';

@NgModule({
  declarations: [
    UserTypeToStringPipe,
    UserPositionToStringPipe,
    GetInitialsPipe,
    LeaveTypeNamePipe,
    UserFullNamePipe,
    LeaveRequestStatusToStringPipe,
  ],
  exports: [
    UserTypeToStringPipe,
    UserPositionToStringPipe,
    GetInitialsPipe,
    LeaveTypeNamePipe,
    UserFullNamePipe,
    LeaveRequestStatusToStringPipe,
  ],
})
export class PipesModule {}
