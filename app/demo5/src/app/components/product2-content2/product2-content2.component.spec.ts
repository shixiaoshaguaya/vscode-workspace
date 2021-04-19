import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2Content2Component } from './product2-content2.component';

describe('Product2Content2Component', () => {
  let component: Product2Content2Component;
  let fixture: ComponentFixture<Product2Content2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product2Content2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product2Content2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
