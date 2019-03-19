import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacaPage } from './vaca.page';

describe('VacaPage', () => {
  let component: VacaPage;
  let fixture: ComponentFixture<VacaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
