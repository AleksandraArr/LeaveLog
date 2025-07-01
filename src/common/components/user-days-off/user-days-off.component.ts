import { Component, Input, OnInit } from '@angular/core';
import { UserDaysOff } from 'src/common/models/user-days-off.model';
import { User } from 'src/common/models/user.model';
@Component({
  selector: 'app-user-days-off',
  templateUrl: './user-days-off.component.html',
  styleUrls: ['./user-days-off.component.scss'],
  standalone: false,
})
export class UserDaysOffComponent implements OnInit {
  @Input() userDaysOff: UserDaysOff = new UserDaysOff();
  constructor() {}

  ngOnInit() {}
}
