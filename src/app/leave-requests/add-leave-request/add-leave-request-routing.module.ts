import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLeaveRequestPage } from './add-leave-request.page';

const routes: Routes = [
  {
    path: '',
    component: AddLeaveRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLeaveRequestPageRoutingModule {}
