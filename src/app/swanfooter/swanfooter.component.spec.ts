import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwanfooterComponent } from './swanfooter.component';

describe('SwanfooterComponent', () => {
  let component: SwanfooterComponent;
  let fixture: ComponentFixture<SwanfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwanfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwanfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
