/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CateAddComponent } from './cate-add.component';

describe('CateAddComponent', () => {
  let component: CateAddComponent;
  let fixture: ComponentFixture<CateAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
