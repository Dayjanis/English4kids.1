import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimonPage } from './limon.page';

describe('LimonPage', () => {
  let component: LimonPage;
  let fixture: ComponentFixture<LimonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
