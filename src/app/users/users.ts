import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersPage } from './users.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { UsersPageRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    UsersPageRoutingModule,
  ],
  declarations: [UsersPage],
})
export class UsersPageModule {}
