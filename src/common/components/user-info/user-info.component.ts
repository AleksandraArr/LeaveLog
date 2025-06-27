import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/common/models/user.model';
import { PipesModule } from 'src/common/pipes/pipes.module';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  standalone: false,
})
export class UserInfoComponent implements OnInit {
  @Input() user: User = new User();
  constructor() {}

  ngOnInit() {}
}
