import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselLancamentoComponent } from './carrosel-lancamento.component';

describe('CarroselLancamentoComponent', () => {
  let component: CarroselLancamentoComponent;
  let fixture: ComponentFixture<CarroselLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroselLancamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroselLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
