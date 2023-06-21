/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VieweventComponent } from './viewevent.component';

describe('VieweventComponent', () => {
  let component: VieweventComponent;
  let fixture: ComponentFixture<VieweventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieweventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieweventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
