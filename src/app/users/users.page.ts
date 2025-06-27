import { Component } from '@angular/core';
import { User, UserPosition, UserType } from 'src/common/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
  standalone: false,
})
export class UsersPage {
  users: User[] = [
    new User(
      1,
      'Aleksandra',
      'Rakovic',
      'aleksandra.rakovic21@gmail.com',
      UserType.Admin,
      UserPosition.ProjectManager
    ),
    new User(
      2,
      'Lucas',
      'van der Vat',
      'lucasvdvat@gmail.com',
      UserType.User,
      UserPosition.CEO
    ),
    new User(
      3,
      'Milena',
      'Sretenovic',
      'ms2021@gmail.com',
      UserType.User,
      UserPosition.CEO
    ),
  ];

  constructor() {}
}
