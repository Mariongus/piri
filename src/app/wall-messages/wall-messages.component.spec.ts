import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallMessagesComponent } from './wall-messages.component';

describe('WallMessagesComponent', () => {
  let component: WallMessagesComponent;
  let fixture: ComponentFixture<WallMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
