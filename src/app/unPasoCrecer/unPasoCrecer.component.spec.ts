/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnPasoCrecerComponent } from './unPasoCrecer.component';

describe('UnPasoCrecerComponent', () => {
  let component: UnPasoCrecerComponent;
  let fixture: ComponentFixture<UnPasoCrecerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnPasoCrecerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnPasoCrecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
