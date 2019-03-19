import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlancoPage } from './blanco.page';

describe('BlancoPage', () => {
  let component: BlancoPage;
  let fixture: ComponentFixture<BlancoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlancoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
