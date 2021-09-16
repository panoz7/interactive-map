import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendColumnComponent } from './legend-column.component';

describe('LegendColumnComponent', () => {
  let component: LegendColumnComponent;
  let fixture: ComponentFixture<LegendColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
