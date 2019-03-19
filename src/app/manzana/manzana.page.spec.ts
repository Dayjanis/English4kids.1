import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManzanaPage } from './manzana.page';

describe('ManzanaPage', () => {
  let component: ManzanaPage;
  let fixture: ComponentFixture<ManzanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManzanaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManzanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
