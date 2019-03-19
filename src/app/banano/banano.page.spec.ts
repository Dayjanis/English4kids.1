import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BananoPage } from './banano.page';

describe('BananoPage', () => {
  let component: BananoPage;
  let fixture: ComponentFixture<BananoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BananoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
