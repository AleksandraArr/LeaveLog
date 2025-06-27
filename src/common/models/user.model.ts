export enum UserType {
  None,
  Admin,
  User,
}

export function UserTypeToString(userType: UserType): string {
  switch (userType) {
    case UserType.None:
      return 'None';
    case UserType.Admin:
      return 'Admin';
    case UserType.User:
      return 'Zaposleni';
  }
}
export enum UserPosition {
  None,
  CEO,
  ProjectManager,
  BackendDeveloper,
  FrontendDeveloper,
  QA,
}

export function UserPositionToString(value: UserPosition): string {
  switch (value) {
    case UserPosition.None:
      return 'None';
    case UserPosition.CEO:
      return 'CEO';
    case UserPosition.ProjectManager:
      return 'Project Manager';
    case UserPosition.BackendDeveloper:
      return 'Backend Developer';
    case UserPosition.FrontendDeveloper:
      return 'Frontend Developer';
    case UserPosition.QA:
      return 'QA';
    default:
      return 'Unknown position';
  }
}
export class User {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  UserType: UserType;
  UserPosition: UserPosition;

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public userType: UserType,
    public userPosition: UserPosition
  ) {
    this.Id = id;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
    this.UserType = userType;
    this.UserPosition = userPosition;
  }
  get fullName(): string {
    return `${this.FirstName} ${this.LastName}`;
  }
}
