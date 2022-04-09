import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBubbleComponent } from './review-bubble.component';

describe('ReviewBubbleComponent', () => {
  let component: ReviewBubbleComponent;
  let fixture: ComponentFixture<ReviewBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
