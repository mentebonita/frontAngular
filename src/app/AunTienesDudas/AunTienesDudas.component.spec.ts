/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AunTienesDudasComponent } from './AunTienesDudas.component';

describe('AunTienesDudasComponent', () => {
  let component: AunTienesDudasComponent;
  let fixture: ComponentFixture<AunTienesDudasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AunTienesDudasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AunTienesDudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
