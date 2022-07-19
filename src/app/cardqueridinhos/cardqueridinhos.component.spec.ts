import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardqueridinhosComponent } from './cardqueridinhos.component';

describe('CardqueridinhosComponent', () => {
  let component: CardqueridinhosComponent;
  let fixture: ComponentFixture<CardqueridinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardqueridinhosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardqueridinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
