import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Central3Component } from './central3.component';

describe('Central3Component', () => {
  let component: Central3Component;
  let fixture: ComponentFixture<Central3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Central3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Central3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
