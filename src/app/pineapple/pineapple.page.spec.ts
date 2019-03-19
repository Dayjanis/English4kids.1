import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PineapplePage } from './pineapple.page';

describe('PineapplePage', () => {
  let component: PineapplePage;
  let fixture: ComponentFixture<PineapplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PineapplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PineapplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
