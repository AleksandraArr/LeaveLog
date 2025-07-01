export class UserDaysOff {
  constructor(
    public Id: number = 0,
    public UserId: number = 0,
    public BonusDays: number = 0,
    public VacationDays: number = 0,
    public SickDays: number = 0,
    public LastYearVacationDays: number = 0
  ) {}
}
