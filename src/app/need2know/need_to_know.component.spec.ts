/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Need2knowComponent } from './need2know.component';

describe('Need2knowComponent', () => {
  let component: Need2knowComponent;
  let fixture: ComponentFixture<Need2knowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Need2knowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Need2knowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
