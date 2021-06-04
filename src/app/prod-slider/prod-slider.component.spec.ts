import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdSliderComponent } from './prod-slider.component';

describe('ProdSliderComponent', () => {
  let component: ProdSliderComponent;
  let fixture: ComponentFixture<ProdSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
