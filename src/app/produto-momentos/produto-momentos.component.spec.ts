import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoMomentosComponent } from './produto-momentos.component';

describe('ProdutoMomentosComponent', () => {
  let component: ProdutoMomentosComponent;
  let fixture: ComponentFixture<ProdutoMomentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoMomentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoMomentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
