import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosOfertasComponent } from './produtos-ofertas.component';

describe('ProdutosOfertasComponent', () => {
  let component: ProdutosOfertasComponent;
  let fixture: ComponentFixture<ProdutosOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
