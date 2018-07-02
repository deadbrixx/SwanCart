import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankrouteComponent } from './blankroute.component';

describe('BlankrouteComponent', () => {
  let component: BlankrouteComponent;
  let fixture: ComponentFixture<BlankrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
