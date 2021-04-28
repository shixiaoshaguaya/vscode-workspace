import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WuliuComponent } from './wuliu.component';

describe('WuliuComponent', () => {
  let component: WuliuComponent;
  let fixture: ComponentFixture<WuliuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WuliuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WuliuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
