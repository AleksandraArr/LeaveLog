import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'userFullName',
  standalone: false,
})
export class UserFullNamePipe implements PipeTransform {
  transform(users: User[], id: number): string {
    const user = users.find((user) => user.Id === id);
    return user ? user.FirstName + ' ' + user.LastName : 'Unknown user';
  }
}
