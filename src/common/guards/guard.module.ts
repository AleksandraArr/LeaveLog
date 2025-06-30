import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [ServicesModule],
  providers: [AuthGuard],
})
export class GuardModule {}
