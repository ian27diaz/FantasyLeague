import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinLigaComponent } from './sin-liga.component';

describe('SinLigaComponent', () => {
  let component: SinLigaComponent;
  let fixture: ComponentFixture<SinLigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinLigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
