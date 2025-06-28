import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLeaveRequestPageRoutingModule } from './add-leave-request-routing.module';

import { AddLeaveRequestPage } from './add-leave-request.page';
import { ComponentsModule } from 'src/common/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    AddLeaveRequestPageRoutingModule,
  ],
  declarations: [AddLeaveRequestPage],
})
export class AddLeaveRequestPageModule {}
