/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueDicenNuestrosClientesComponent } from './queDicenNuestrosClientes.component';

describe('QueDicenNuestrosClientesComponent', () => {
  let component: QueDicenNuestrosClientesComponent;
  let fixture: ComponentFixture<QueDicenNuestrosClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueDicenNuestrosClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueDicenNuestrosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
