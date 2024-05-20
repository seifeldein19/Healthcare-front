import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthycareComponent } from './healthycare.component';

describe('HealthycareComponent', () => {
  let component: HealthycareComponent;
  let fixture: ComponentFixture<HealthycareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthycareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
