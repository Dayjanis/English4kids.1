import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdePage } from './verde.page';

describe('VerdePage', () => {
  let component: VerdePage;
  let fixture: ComponentFixture<VerdePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerdePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
