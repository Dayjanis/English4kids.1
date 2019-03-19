import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegroPage } from './negro.page';

describe('NegroPage', () => {
  let component: NegroPage;
  let fixture: ComponentFixture<NegroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
