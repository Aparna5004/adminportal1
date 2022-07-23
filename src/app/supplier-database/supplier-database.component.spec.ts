import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDatabaseComponent } from './supplier-database.component';

describe('SupplierDatabaseComponent', () => {
  let component: SupplierDatabaseComponent;
  let fixture: ComponentFixture<SupplierDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
