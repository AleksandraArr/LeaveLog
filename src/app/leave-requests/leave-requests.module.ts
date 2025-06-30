import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaveRequestsPageRoutingModule } from './leave-requests-routing.module';
import { LeaveRequestsPage } from './leave-requests.page';
import { ComponentsModule } from 'src/common/components/components.module';
import { ResolversModule } from 'src/common/resolvers/resolvers.module';
import { ServicesModule } from 'src/common/services/services.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LeaveRequestsPageRoutingModule,
    ComponentsModule,
    ResolversModule,
    ServicesModule,
  ],
  declarations: [LeaveRequestsPage],
})
export class LeaveRequestsPageModule {}
