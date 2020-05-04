import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallNotificationsComponent } from './wall-notifications.component';

describe('WallNotificationsComponent', () => {
  let component: WallNotificationsComponent;
  let fixture: ComponentFixture<WallNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
