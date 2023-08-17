/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OffercharitymembershipComponent } from './offercharitymembership.component';

describe('OffercharitymembershipComponent', () => {
  let component: OffercharitymembershipComponent;
  let fixture: ComponentFixture<OffercharitymembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffercharitymembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffercharitymembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
