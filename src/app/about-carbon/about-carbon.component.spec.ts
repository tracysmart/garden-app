import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCarbonComponent } from './about-carbon.component';

describe('AboutCarbonComponent', () => {
  let component: AboutCarbonComponent;
  let fixture: ComponentFixture<AboutCarbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCarbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCarbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
