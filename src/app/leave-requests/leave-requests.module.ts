import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LeaveRequestsPageRoutingModule } from './leave-requests-routing.module';
import { LeaveRequestsPage } from './leave-requests.page';
import { ComponentsModule } from 'src/common/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LeaveRequestsPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [LeaveRequestsPage],
})
export class LeaveRequestsPageModule {}
