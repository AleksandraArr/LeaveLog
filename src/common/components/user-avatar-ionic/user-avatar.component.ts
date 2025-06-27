import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  standalone: false,
})
export class UserAvatarComponent {
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

  constructor() {}

  public get imageSrc(): string {
    if (this.tempImage != '') return this.tempImage;
    else if (this.tempImage === '' && !this.imageRemoved) {
      if (this.avatarFileName === '') return '';
    }
    return '';
  }
}
