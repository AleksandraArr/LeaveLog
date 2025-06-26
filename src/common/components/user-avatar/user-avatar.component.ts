import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'me-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  standalone: false,
})
export class UserAvatarComponent {
  //public user: User | null = null;
  //@Input('user') set setUser(user: User | null) {
  //	this.user = user;
  //}

  public userName: string = '';
  @Input('userName') set setUserName(userName: string) {
    this.userName = userName;
  }

  public avatarFileName: string = '';
  @Input('avatarFileName') set setAvatarFileName(avatarFileName: string) {
    this.avatarFileName = avatarFileName;
  }

  @Input() public tempImage: string = '';
  @Input() public size: number = 40;
  @Input() public margin: string = '';
  @Input() public fontSize: string = '';
  @Input() public imageRemoved: boolean = false;
  @Input() public backgroundColor: string = '';
  @Input() public color: string = '';
  @Input() public avatarClass: string = '';
  @Input() public useIdenticon: boolean = true;
  @Input() public canEdit: boolean = false;
  @Input() public canDelete: boolean = false;
  @Input() public hasBorder: boolean = false;
  @Output('remove') public remove: EventEmitter<void> =
    new EventEmitter<void>();
  @Output('edit') public edit: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  public get imageSrc(): string {
    if (this.tempImage != '') return this.tempImage;
    else if (this.tempImage === '' && !this.imageRemoved) {
      if (this.avatarFileName === '') return '';
    }
    return '';
  }
}
