import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveRequestEditPageRoutingModule } from './leave-request-edit-routing.module';

import { LeaveRequestEditPage } from './leave-request-edit.page';
import { ComponentsModule } from 'src/common/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LeaveRequestEditPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [LeaveRequestEditPage],
})
export class LeaveRequestEditPageModule {}
