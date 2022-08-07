/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FotoMolduraComponent } from './foto-moldura.component';

describe('FotoMolduraComponent', () => {
  let component: FotoMolduraComponent;
  let fixture: ComponentFixture<FotoMolduraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoMolduraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoMolduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
