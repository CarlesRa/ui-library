import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyTableComponent } from './gy-table.component';

describe('GyTableComponent', () => {
  let component: GyTableComponent;
  let fixture: ComponentFixture<GyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
