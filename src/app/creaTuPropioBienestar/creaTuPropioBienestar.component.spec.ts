/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreaTuPropioBienestarComponent } from './creaTuPropioBienestar.component';

describe('CreaTuPropioBienestarComponent', () => {
  let component: CreaTuPropioBienestarComponent;
  let fixture: ComponentFixture<CreaTuPropioBienestarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaTuPropioBienestarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaTuPropioBienestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
