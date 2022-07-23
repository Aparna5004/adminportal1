import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDatabase1Component } from './product-database1.component';

describe('ProductDatabase1Component', () => {
  let component: ProductDatabase1Component;
  let fixture: ComponentFixture<ProductDatabase1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDatabase1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDatabase1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
