import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveRequestEditPage } from './leave-request-edit.page';

describe('LeaveRequestEditPage', () => {
  let component: LeaveRequestEditPage;
  let fixture: ComponentFixture<LeaveRequestEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRequestEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
