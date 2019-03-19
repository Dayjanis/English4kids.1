import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmarilloPage } from './amarillo.page';

describe('AmarilloPage', () => {
  let component: AmarilloPage;
  let fixture: ComponentFixture<AmarilloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmarilloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmarilloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
