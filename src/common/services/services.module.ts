import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LeaveRequestApiService } from './leave-request-api.service';

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  providers: [LeaveRequestApiService],
})
export class ServicesModule {}
