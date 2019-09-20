import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Central1Component } from './central1.component';

describe('Central1Component', () => {
  let component: Central1Component;
  let fixture: ComponentFixture<Central1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Central1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Central1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
