import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveregComponent } from './reactivereg.component';

describe('ReactiveregComponent', () => {
  let component: ReactiveregComponent;
  let fixture: ComponentFixture<ReactiveregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
