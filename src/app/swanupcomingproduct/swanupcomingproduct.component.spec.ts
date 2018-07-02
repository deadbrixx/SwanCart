import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwanupcomingproductComponent } from './swanupcomingproduct.component';

describe('SwanupcomingproductComponent', () => {
  let component: SwanupcomingproductComponent;
  let fixture: ComponentFixture<SwanupcomingproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwanupcomingproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwanupcomingproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
