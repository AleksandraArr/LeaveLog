import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserAvatarComponent } from './user-avatar-ionic/user-avatar.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [HeaderComponent, UserAvatarComponent],
  imports: [CommonModule, IonicModule, PipesModule],
  exports: [HeaderComponent, UserAvatarComponent],
})
export class ComponentsModule {}
