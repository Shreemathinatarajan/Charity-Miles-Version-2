/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdmineventComponent } from './Adminevent.component';

describe('AdmineventComponent', () => {
  let component: AdmineventComponent;
  let fixture: ComponentFixture<AdmineventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmineventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
