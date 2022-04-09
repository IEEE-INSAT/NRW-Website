import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NRWJuniorComponent } from './nrw-junior.component';

describe('NRWJuniorComponent', () => {
  let component: NRWJuniorComponent;
  let fixture: ComponentFixture<NRWJuniorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NRWJuniorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NRWJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
