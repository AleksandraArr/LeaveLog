import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LeaveRequestsPageRoutingModule } from './leave-requests-routing.module';
import { LeaveRequestsPage } from './leave-requests.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LeaveRequestsPageRoutingModule,
  ],
  declarations: [LeaveRequestsPage],
})
export class LeaveRequestsPageModule {}
