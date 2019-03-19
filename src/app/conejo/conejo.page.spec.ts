import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConejoPage } from './conejo.page';

describe('ConejoPage', () => {
  let component: ConejoPage;
  let fixture: ComponentFixture<ConejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConejoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
