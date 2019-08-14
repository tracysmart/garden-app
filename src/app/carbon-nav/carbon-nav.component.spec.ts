import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonNavComponent } from './carbon-nav.component';

describe('CarbonNavComponent', () => {
  let component: CarbonNavComponent;
  let fixture: ComponentFixture<CarbonNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
