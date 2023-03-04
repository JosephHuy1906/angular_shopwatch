/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OderComponent } from './oder.component';

describe('OderComponent', () => {
  let component: OderComponent;
  let fixture: ComponentFixture<OderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
