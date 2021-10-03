import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyNotificationPanelComponent } from './gy-notification-panel.component';

describe('GyNotificationPanelComponent', () => {
  let component: GyNotificationPanelComponent;
  let fixture: ComponentFixture<GyNotificationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyNotificationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GyNotificationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
