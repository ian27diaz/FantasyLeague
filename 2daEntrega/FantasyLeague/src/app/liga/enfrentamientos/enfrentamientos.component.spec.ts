import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfrentamientosComponent } from './enfrentamientos.component';

describe('EnfrentamientosComponent', () => {
  let component: EnfrentamientosComponent;
  let fixture: ComponentFixture<EnfrentamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfrentamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfrentamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
