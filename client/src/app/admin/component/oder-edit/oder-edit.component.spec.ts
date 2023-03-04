/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OderEditComponent } from './oder-edit.component';

describe('OderEditComponent', () => {
  let component: OderEditComponent;
  let fixture: ComponentFixture<OderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
