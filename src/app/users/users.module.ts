import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersPage } from './users.page';
import { UsersPageRoutingModule } from './users-routing.module';
import { ComponentsModule } from 'src/common/components/components.module';
import { ServicesModule } from 'src/common/services/services.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UsersPageRoutingModule,
    ComponentsModule,
    ServicesModule,
  ],
  declarations: [UsersPage],
})
export class UsersPageModule {}
