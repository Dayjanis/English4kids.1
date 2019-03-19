import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzulPage } from './azul.page';

describe('AzulPage', () => {
  let component: AzulPage;
  let fixture: ComponentFixture<AzulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzulPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
