import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwannavbarComponent } from './swannavbar.component';

describe('SwannavbarComponent', () => {
  let component: SwannavbarComponent;
  let fixture: ComponentFixture<SwannavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwannavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwannavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
