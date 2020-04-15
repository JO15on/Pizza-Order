import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartDetailsComponent } from './shoppingcart-details.component';

describe('ShoppingcartDetailsComponent', () => {
  let component: ShoppingcartDetailsComponent;
  let fixture: ComponentFixture<ShoppingcartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
