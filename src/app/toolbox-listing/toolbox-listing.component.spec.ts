import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxListingComponent } from './toolbox-listing.component';

describe('ToolboxListingComponent', () => {
  let component: ToolboxListingComponent;
  let fixture: ComponentFixture<ToolboxListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolboxListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolboxListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
