import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { PipesModule } from 'src/common/pipes/pipes.module';
import { ComponentsModule } from 'src/common/components/components.module';
import { ServicesModule } from 'src/common/services/services.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfilePageRoutingModule,
    PipesModule,
    ComponentsModule,
    ServicesModule,
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
