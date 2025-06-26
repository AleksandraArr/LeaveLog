import { NgModule } from '@angular/core';
import { UserTypeToStringPipe } from './user-type-to-string.pipe';
import { UserPositionToStringPipe } from './user-position-to-string.pipe';
import { GetInitialsPipe } from './get-initials.pipe';

@NgModule({
  declarations: [
    UserTypeToStringPipe,
    UserPositionToStringPipe,
    GetInitialsPipe,
  ],
  exports: [UserTypeToStringPipe, UserPositionToStringPipe, GetInitialsPipe],
})
export class PipesModule {}
