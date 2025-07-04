import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LeaveRequestApiService } from './leave-request-api.service';
import { LeaveTypeApiService } from './leave-type-api.service';
import { AuthService } from './auth.service';
import { UserApiService } from './user-api.service';
import { ToastService } from './toast.service';
import { UserDaysOffApiService } from './user-days-off-api.service';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  providers: [
    LeaveRequestApiService,
    LeaveTypeApiService,
    AuthService,
    UserApiService,
    ToastService,
    UserDaysOffApiService,
  ],
})
export class ServicesModule {}
