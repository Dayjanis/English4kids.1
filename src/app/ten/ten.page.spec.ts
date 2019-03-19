import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenPage } from './ten.page';

describe('TenPage', () => {
  let component: TenPage;
  let fixture: ComponentFixture<TenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
