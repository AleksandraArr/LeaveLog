import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersPageModule),
      },
      {
        path: 'leave-requests',
        loadChildren: () =>
          import('../leave-requests/leave-requests.module').then(
            (m) => m.LeaveRequestsPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: '',
        redirectTo: '/leave-requests',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/leave-requests',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
