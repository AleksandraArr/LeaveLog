import { Pipe, PipeTransform } from '@angular/core';
import { UserType, UserTypeToString } from '../models/user.model';

@Pipe({
  name: 'userTypeToString',
  pure: true,
  standalone: false,
})
export class UserTypeToStringPipe implements PipeTransform {
  transform(value: UserType): string {
    return UserTypeToString(value);
  }
}
