import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatmentsComponent } from './depatments.component';

describe('DepatmentsComponent', () => {
  let component: DepatmentsComponent;
  let fixture: ComponentFixture<DepatmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepatmentsComponent]
    });
    fixture = TestBed.createComponent(DepatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
