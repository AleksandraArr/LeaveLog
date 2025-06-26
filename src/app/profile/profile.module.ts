import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { PipesModule } from 'src/common/pipes/pipes.module';
import { UserAvatarModule } from 'src/common/components/user-avatar/user-avatar.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfilePageRoutingModule,
    PipesModule,
    UserAvatarModule,
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
