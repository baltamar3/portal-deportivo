import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquiposComponent } from './list-equipos.component';

describe('ListEquiposComponent', () => {
  let component: ListEquiposComponent;
  let fixture: ComponentFixture<ListEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
