import { Pipe, PipeTransform } from '@angular/core';
import { UserPosition, UserPositionToString } from '../models/user.model';

@Pipe({
  name: 'userPositionToString',
  pure: true,
  standalone: false,
})
export class UserPositionToStringPipe implements PipeTransform {
  transform(value: UserPosition): string {
    return UserPositionToString(value);
  }
}
