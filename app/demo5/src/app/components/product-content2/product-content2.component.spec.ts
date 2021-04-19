import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductContent2Component } from './product-content2.component';

describe('ProductContent2Component', () => {
  let component: ProductContent2Component;
  let fixture: ComponentFixture<ProductContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductContent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
