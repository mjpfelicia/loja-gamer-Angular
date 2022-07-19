import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselMarcasComponent } from './carrosel-marcas.component';

describe('CarroselMarcasComponent', () => {
  let component: CarroselMarcasComponent;
  let fixture: ComponentFixture<CarroselMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroselMarcasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroselMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
