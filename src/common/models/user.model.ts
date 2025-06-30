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
      return 'User';
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
export function UserErrorCodeToMessage(errorCode: string): string {
  switch (errorCode) {
    case 'user_not_found':
      return 'User does not exist.';
    case 'user_not_employee':
      return 'User is not an employee.';
    case 'email_invalid':
      return 'Email does not exist.';
    case 'email_not_confirmed':
      return 'Email address is not confirmed. Please check your inbox.';
    case 'password_invalid':
      return 'Invalid password.';
    case 'user_deactivated':
      return 'Invalid credentials.';
    case 'invalid_credentials':
      return 'Invalid credentials.';
    default:
      return 'An error occurred. Please try again.';
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
    id: number = 0,
    firstName: string = '',
    lastName: string = '',
    email: string = '',
    userType: UserType = UserType.None,
    userPosition: UserPosition = UserPosition.None
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
