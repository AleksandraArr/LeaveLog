import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './user-avatar.component';
import { PipesModule } from 'src/common/pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [UserAvatarComponent],
  imports: [CommonModule, PipesModule, IonicModule],
  exports: [UserAvatarComponent],
})
export class UserAvatarModule {}
