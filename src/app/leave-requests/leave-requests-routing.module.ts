import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestsPage } from './leave-requests.page';
import { GetLeaveRequestByIdResolver } from 'src/common/resolvers/get-leave-request-by-id.resolver';

const routes: Routes = [
  {
    path: 'add-leave-request',
    loadChildren: () =>
      import('./add-leave-request/add-leave-request.module').then(
        (m) => m.AddLeaveRequestPageModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./leave-request-edit/leave-request-edit.module').then(
        (m) => m.LeaveRequestEditPageModule
      ),
    resolve: {
      leaveRequest: GetLeaveRequestByIdResolver,
    },
  },
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
