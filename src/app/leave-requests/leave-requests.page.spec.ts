import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaveRequestsPage } from './leave-requests.page';

describe('LeaveRequestsPage', () => {
  let component: LeaveRequestsPage;
  let fixture: ComponentFixture<LeaveRequestsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveRequestsPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
