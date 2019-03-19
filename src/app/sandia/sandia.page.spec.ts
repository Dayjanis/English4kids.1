import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandiaPage } from './sandia.page';

describe('SandiaPage', () => {
  let component: SandiaPage;
  let fixture: ComponentFixture<SandiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
