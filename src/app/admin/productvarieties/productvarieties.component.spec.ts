import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductvarietiesComponent } from './productvarieties.component';

describe('ProductvarietiesComponent', () => {
  let component: ProductvarietiesComponent;
  let fixture: ComponentFixture<ProductvarietiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductvarietiesComponent]
    });
    fixture = TestBed.createComponent(ProductvarietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
