/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharityComponent } from './Charity.component';

describe('CharityComponent', () => {
  let component: CharityComponent;
  let fixture: ComponentFixture<CharityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
