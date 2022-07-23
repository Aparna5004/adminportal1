import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTrackerComponent } from './supplier-tracker.component';

describe('SupplierTrackerComponent', () => {
  let component: SupplierTrackerComponent;
  let fixture: ComponentFixture<SupplierTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
