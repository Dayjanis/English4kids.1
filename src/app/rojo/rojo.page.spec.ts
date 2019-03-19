import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RojoPage } from './rojo.page';

describe('RojoPage', () => {
  let component: RojoPage;
  let fixture: ComponentFixture<RojoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RojoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RojoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
