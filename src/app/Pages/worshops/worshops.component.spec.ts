import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshopsComponent } from './worshops.component';

describe('WorshopsComponent', () => {
  let component: WorshopsComponent;
  let fixture: ComponentFixture<WorshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
