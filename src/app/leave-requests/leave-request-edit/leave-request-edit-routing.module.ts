import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveRequestEditPage } from './leave-request-edit.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveRequestEditPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRequestEditPageRoutingModule {}
