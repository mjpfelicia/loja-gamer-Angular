import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogimComponent } from './logim.component';

describe('LogimComponent', () => {
  let component: LogimComponent;
  let fixture: ComponentFixture<LogimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
