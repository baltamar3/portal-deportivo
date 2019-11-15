import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleJugadorComponent } from './detalle-jugador.component';

describe('DetalleJugadorComponent', () => {
  let component: DetalleJugadorComponent;
  let fixture: ComponentFixture<DetalleJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
