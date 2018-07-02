import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwannewproductComponent } from './swannewproduct.component';

describe('SwannewproductComponent', () => {
  let component: SwannewproductComponent;
  let fixture: ComponentFixture<SwannewproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwannewproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwannewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
