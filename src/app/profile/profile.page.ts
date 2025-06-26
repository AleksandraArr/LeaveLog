import { Component } from '@angular/core';
import { User, UserPosition, UserType } from 'src/common/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  standalone: false,
})
export class ProfilePage {
  user: User = new User(
    1,
    'Aleksandra',
    'Rakovic',
    'aleksandra.rakovic21@gmail.com',
    UserType.Admin,
    UserPosition.BackendDeveloper
  );
  constructor() {}
}
