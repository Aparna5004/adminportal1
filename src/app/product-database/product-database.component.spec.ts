import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDatabaseComponent } from './product-database.component';

describe('ProductDatabaseComponent', () => {
  let component: ProductDatabaseComponent;
  let fixture: ComponentFixture<ProductDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDatabaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
