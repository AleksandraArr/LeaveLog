import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLeaveRequestPage } from './add-leave-request.page';

describe('AddLeaveRequestPage', () => {
  let component: AddLeaveRequestPage;
  let fixture: ComponentFixture<AddLeaveRequestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeaveRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
