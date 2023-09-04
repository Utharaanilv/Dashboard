import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProffessorsComponent } from './proffessors.component';

describe('ProffessorsComponent', () => {
  let component: ProffessorsComponent;
  let fixture: ComponentFixture<ProffessorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProffessorsComponent]
    });
    fixture = TestBed.createComponent(ProffessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
