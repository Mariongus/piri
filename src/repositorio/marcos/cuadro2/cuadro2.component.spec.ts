import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuadro2Component } from './cuadro2.component';

describe('Cuadro2Component', () => {
  let component: Cuadro2Component;
  let fixture: ComponentFixture<Cuadro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cuadro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuadro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
