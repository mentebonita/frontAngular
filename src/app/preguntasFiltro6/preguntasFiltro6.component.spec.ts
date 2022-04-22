/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreguntasFiltro6Component } from './preguntasFiltro6.component';

describe('PreguntasFiltro6Component', () => {
  let component: PreguntasFiltro6Component;
  let fixture: ComponentFixture<PreguntasFiltro6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasFiltro6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasFiltro6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
