import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetPasswordPageRoutingModule } from './set-password-routing.module';

import { SetPasswordPage } from './set-password.page';
import { ServicesModule } from 'src/common/services/services.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SetPasswordPageRoutingModule,
    ServicesModule,
  ],
  declarations: [SetPasswordPage],
})
export class SetPasswordPageModule {}
