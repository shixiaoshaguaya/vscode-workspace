import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaiComponent } from './questionai.component';

describe('QuestionaiComponent', () => {
  let component: QuestionaiComponent;
  let fixture: ComponentFixture<QuestionaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
