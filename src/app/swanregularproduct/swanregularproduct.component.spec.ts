import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwanregularproductComponent } from './swanregularproduct.component';

describe('SwanregularproductComponent', () => {
  let component: SwanregularproductComponent;
  let fixture: ComponentFixture<SwanregularproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwanregularproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwanregularproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
