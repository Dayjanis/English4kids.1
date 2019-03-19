import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradoPage } from './morado.page';

describe('MoradoPage', () => {
  let component: MoradoPage;
  let fixture: ComponentFixture<MoradoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoradoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
