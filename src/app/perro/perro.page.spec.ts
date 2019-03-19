import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroPage } from './perro.page';

describe('PerroPage', () => {
  let component: PerroPage;
  let fixture: ComponentFixture<PerroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
