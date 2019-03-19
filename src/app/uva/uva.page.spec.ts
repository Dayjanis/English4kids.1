import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvaPage } from './uva.page';

describe('UvaPage', () => {
  let component: UvaPage;
  let fixture: ComponentFixture<UvaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
