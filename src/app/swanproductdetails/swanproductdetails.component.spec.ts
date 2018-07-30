import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwanproductdetailsComponent } from './swanproductdetails.component';

describe('SwanproductdetailsComponent', () => {
  let component: SwanproductdetailsComponent;
  let fixture: ComponentFixture<SwanproductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwanproductdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwanproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
