/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WarehousequoteComponent } from './warehousequote.component';

describe('WarehousequoteComponent', () => {
  let component: WarehousequoteComponent;
  let fixture: ComponentFixture<WarehousequoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehousequoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
