import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJugadoresComponent } from './list-jugadores.component';

describe('ListJugadoresComponent', () => {
  let component: ListJugadoresComponent;
  let fixture: ComponentFixture<ListJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
