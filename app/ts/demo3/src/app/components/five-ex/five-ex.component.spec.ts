import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveExComponent } from './five-ex.component';

describe('FiveExComponent', () => {
  let component: FiveExComponent;
  let fixture: ComponentFixture<FiveExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
