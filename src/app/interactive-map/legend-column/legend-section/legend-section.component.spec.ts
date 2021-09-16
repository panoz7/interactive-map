import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendSectionComponent } from './legend-section.component';

describe('LegendSectionComponent', () => {
  let component: LegendSectionComponent;
  let fixture: ComponentFixture<LegendSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
