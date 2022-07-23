import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTrendsComponent } from './category-trends.component';

describe('CategoryTrendsComponent', () => {
  let component: CategoryTrendsComponent;
  let fixture: ComponentFixture<CategoryTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTrendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
