import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreePasarelaComponent } from './step-three-pasarela.component';

describe('StepThreePasarelaComponent', () => {
  let component: StepThreePasarelaComponent;
  let fixture: ComponentFixture<StepThreePasarelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepThreePasarelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreePasarelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
