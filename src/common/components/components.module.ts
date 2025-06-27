import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserAvatarComponent } from './user-avatar-ionic/user-avatar.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UserAvatarComponent,
    UserInfoComponent,
    LeaveRequestComponent,
  ],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [
    HeaderComponent,
    UserAvatarComponent,
    UserInfoComponent,
    LeaveRequestComponent,
  ],
})
export class ComponentsModule {}
