import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwanshowproductsComponent } from './swanshowproducts.component';

describe('SwanshowproductsComponent', () => {
  let component: SwanshowproductsComponent;
  let fixture: ComponentFixture<SwanshowproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwanshowproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwanshowproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
