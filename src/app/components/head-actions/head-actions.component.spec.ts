import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadActionsComponent } from './head-actions.component';

describe('HeadActionsComponent', () => {
  let component: HeadActionsComponent;
  let fixture: ComponentFixture<HeadActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadActionsComponent]
    });
    fixture = TestBed.createComponent(HeadActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
