import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerezaPage } from './cereza.page';

describe('CerezaPage', () => {
  let component: CerezaPage;
  let fixture: ComponentFixture<CerezaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerezaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
