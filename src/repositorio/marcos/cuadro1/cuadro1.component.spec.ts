import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuadro1Component } from './cuadro1.component';

describe('Cuadro1Component', () => {
  let component: Cuadro1Component;
  let fixture: ComponentFixture<Cuadro1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cuadro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuadro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
