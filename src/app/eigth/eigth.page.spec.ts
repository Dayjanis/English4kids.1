import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigthPage } from './eigth.page';

describe('EigthPage', () => {
  let component: EigthPage;
  let fixture: ComponentFixture<EigthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
