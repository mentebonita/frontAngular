/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DanderasComponent } from './danderas.component';

describe('DanderasComponent', () => {
  let component: DanderasComponent;
  let fixture: ComponentFixture<DanderasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanderasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanderasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
