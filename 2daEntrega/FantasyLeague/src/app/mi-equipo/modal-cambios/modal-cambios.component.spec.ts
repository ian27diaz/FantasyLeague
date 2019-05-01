import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCambiosComponent } from './modal-cambios.component';

describe('ModalCambiosComponent', () => {
  let component: ModalCambiosComponent;
  let fixture: ComponentFixture<ModalCambiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCambiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCambiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
