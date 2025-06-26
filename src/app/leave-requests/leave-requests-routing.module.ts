import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestsPage } from './leave-requests.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveRequestsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveRequestsPageRoutingModule {}
