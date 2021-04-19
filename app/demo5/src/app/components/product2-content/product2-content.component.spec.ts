import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2ContentComponent } from './product2-content.component';

describe('Product2ContentComponent', () => {
  let component: Product2ContentComponent;
  let fixture: ComponentFixture<Product2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product2ContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
